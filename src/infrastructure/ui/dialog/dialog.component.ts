import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  EventEmitter,
  NgZone,
  OnDestroy,
  Output,
  Renderer2,
  Type,
  ViewChild,
  ViewEncapsulation,
  ViewRef,
} from '@angular/core';
import {
  animate,
  animation,
  AnimationEvent,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { DialogConfig } from './dialog-config';
import { DomHandler } from 'primeng/dom';
import { DialogRef } from './dialog-ref';
import { Subscription } from 'rxjs';
import { DialogContentDirective } from './dialog-content.directive';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

const showAnimation = animation([
  style({ transform: '{{transform}}', opacity: 0 }),
  animate('{{transition}}', style({ transform: 'none', opacity: 1 })),
]);

const hideAnimation = animation([
  animate('{{transition}}', style({ transform: '{{transform}}', opacity: 0 })),
]);

@Component({
  selector: 'atlas-dialog',
  standalone: true,
  imports: [CommonModule, ButtonModule, DialogContentDirective, RippleModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  animations: [
    trigger('animation', [
      transition('void => visible', [useAnimation(showAnimation)]),
      transition('visible => void', [useAnimation(hideAnimation)]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  shouldDisableBtn = false;
  visible = true;
  componentRef!: ComponentRef<any>;
  mask!: HTMLDivElement;
  @ViewChild(DialogContentDirective) insertionPoint!: DialogContentDirective;
  @ViewChild('mask') maskViewChild: ElementRef = new ElementRef<any>(null);
  childComponentType!: Type<any>;
  container!: HTMLDivElement | null;
  wrapper!: HTMLElement | null;
  documentKeydownListener!: any;
  documentEscapeListener!: Function | null;
  maskClickListener!: Function | null;
  transformOptions: string = 'scale(0.7)';
  @Output() onMaximize: EventEmitter<any> = new EventEmitter();
  private _subs: Subscription = new Subscription();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    public renderer: Renderer2,
    public config: DialogConfig,
    private dialogRef: DialogRef,
    public zone: NgZone, //private _btnService: ButtonService
  ) {}

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
    // this._subs.add(
    //   this._btnService.getShouldDisableBtn.subscribe((res) => {
    //     this.shouldDisableBtn = res;
    //   })
    // );
  }

  loadChildComponent(componentType: Type<any> | null) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(componentType!);

    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  moveOnTop() {
    if (this.config.autoZIndex !== false) {
      const zIndex = (this.config.baseZIndex || 0) + ++DomHandler.zindex;
      this.container!.style.zIndex = String(zIndex);
      this.maskViewChild.nativeElement.style.zIndex = String(zIndex - 1);
    }
  }

  onAnimationStart(event: AnimationEvent) {
    switch (event.toState) {
      case 'visible':
        this.container = event.element;
        this.wrapper = this.container!.parentElement;
        this.moveOnTop();
        this.bindGlobalListeners();

        if (this.config.modal !== false) {
          this.enableModality();
        }
        this.focus();
        break;

      case 'void':
        this.onContainerDestroy();
        break;
    }
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.dialogRef.destroy();
    }
  }

  onContainerDestroy() {
    this.unbindGlobalListeners();

    if (this.config.modal !== false) {
      this.disableModality();
    }
    this.container = null;
  }

  close() {
    //this._btnService.enableButton();
    this.visible = false;
    this.cd.markForCheck();
  }

  maximize() {
    this.config.maximized = !this.config.maximized;
    if (this.dialogRef) {
      if (this.config.maximized)
        DomHandler.addClass(document.body, 'p-overflow-hidden');
      else DomHandler.removeClass(document.body, 'p-overflow-hidden');
    }

    this.onMaximize.emit({ maximized: this.config.maximized });
  }

  hide() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  submit() {
    if (this.dialogRef) {
      this.dialogRef.submit();
    }
  }

  enableModality() {
    if (this.config.closable !== false && this.config.dismissableMask) {
      this.maskClickListener = this.renderer.listen(
        this.wrapper,
        'mousedown',
        (event: any) => {
          if (this.wrapper && this.wrapper.isSameNode(event.target)) {
            this.hide();
          }
        },
      );
    }

    if (this.config.modal !== false) {
      DomHandler.addClass(document.body, 'p-overflow-hidden');
    }
  }

  disableModality() {
    if (this.wrapper) {
      if (this.config.dismissableMask) {
        this.unbindMaskClickListener();
      }

      if (this.config.modal !== false) {
        DomHandler.removeClass(document.body, 'p-overflow-hidden');
      }

      if (!(this.cd as ViewRef).destroyed) {
        this.cd.detectChanges();
      }
    }
  }

  onKeydown(event: KeyboardEvent) {
    if (event.which === 9) {
      event.preventDefault();

      let focusableElements = DomHandler.getFocusableElements(this.container!);

      if (focusableElements && focusableElements.length > 0) {
        if (!focusableElements[0].ownerDocument.activeElement) {
          focusableElements[0].focus();
        } else {
          let focusedIndex = focusableElements.indexOf(
            focusableElements[0].ownerDocument.activeElement,
          );

          if (event.shiftKey) {
            if (focusedIndex == -1 || focusedIndex === 0)
              focusableElements[focusableElements.length - 1].focus();
            else focusableElements[focusedIndex - 1].focus();
          } else {
            if (
              focusedIndex == -1 ||
              focusedIndex === focusableElements.length - 1
            )
              focusableElements[0].focus();
            else focusableElements[focusedIndex + 1].focus();
          }
        }
      }
    }
  }

  focus() {
    let focusable = DomHandler.findSingle(this.container, '[autofocus]');
    if (focusable) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => focusable.focus(), 5);
      });
    }
  }

  bindGlobalListeners() {
    this.bindDocumentKeydownListener();

    if (this.config.closeOnEscape !== false && this.config.closable !== false) {
      this.bindDocumentEscapeListener();
    }
  }

  unbindGlobalListeners() {
    this.unbindDocumentKeydownListener();
    this.unbindDocumentEscapeListener();
  }

  bindDocumentKeydownListener() {
    this.zone.runOutsideAngular(() => {
      this.documentKeydownListener = this.onKeydown.bind(this);
      window.document.addEventListener('keydown', this.documentKeydownListener);
    });
  }

  unbindDocumentKeydownListener() {
    if (this.documentKeydownListener) {
      window.document.removeEventListener(
        'keydown',
        this.documentKeydownListener,
      );
      this.documentKeydownListener = null;
    }
  }

  bindDocumentEscapeListener() {
    const documentTarget: any = this.maskViewChild
      ? this.maskViewChild.nativeElement.ownerDocument
      : 'document';

    this.documentEscapeListener = this.renderer.listen(
      documentTarget,
      'keydown',
      (event) => {
        if (event.which == 27) {
          if (
            parseInt(this.container!.style.zIndex) ==
            DomHandler.zindex +
              (this.config.baseZIndex ? this.config.baseZIndex : 0)
          ) {
            this.hide();
          }
        }
      },
    );
  }

  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }

  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }

  ngOnDestroy() {
    this.onContainerDestroy();

    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
