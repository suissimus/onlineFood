import { Type } from '@angular/core';

export class DialogConfig {
  data?: any;
  header?: string;
  headerDescription?: string;
  footer?: string;
  width?: string;
  height?: string;
  closeOnEscape?: boolean;
  baseZIndex?: number;
  autoZIndex?: boolean;
  dismissableMask?: boolean;
  rtl?: boolean;
  style?: any;
  contentStyle?: any;
  styleClass?: string;
  transitionOptions?: string;
  closable?: boolean;
  showHeader?: boolean | undefined;
  modal?: boolean;
  maximisable?: boolean;
  maximized?: boolean;
  minimizeIcon?: string;
  maximizeIcon?: string;
  dialogSize: DialogSize;
  hideFooter?: boolean;
  hideCancel?: boolean;
  customSubmitButton?: FooterAction;
  customCancelButton?: FooterAction;

  constructor(dialogSize: DialogSize = DialogSize.SMALL) {
    this.width = dialogSize.value.width;
    this.height = dialogSize.value.height;
    this.dialogSize = dialogSize;
    this.closeOnEscape = true;
    this.closable = false;
    this.dismissableMask = true;
    this.baseZIndex = 10000;
    this.data = null;
    this.maximisable = false;
    this.minimizeIcon = 'pi pi-window-minimize';
    this.maximizeIcon = 'pi pi-window-maximize';
    this.checkIfFull(dialogSize);
  }

  set setDialogSize(size: DialogSize) {
    this.width = size.value.width;
    this.height = size.value.height;
    this.checkIfFull(size);
  }

  private checkIfFull(dialogSize: DialogSize) {
    if (dialogSize.toString() === 'FULL') {
      this.maximized = true;
      this.maximisable = false;
    } else {
      this.maximized = false;
      this.maximisable = true;
    }
  }
}

export declare interface OnDialogInit {
  /**
   * Služi za prosleđivanje komponente koju želimo da otvorimo u dialogu u dialogService
   *
   * Kako nam dialogService.open() vraca referencu na dialog, u ovoj metodi možemo odraditi
   * subscribe na onClose(). Ovo nam omogućava da push/update element iz tabele.
   * dada
   * @param config referenca na dynamic dialog config
   */
  openDialog?(config?: DialogConfig): void;
}

export interface OnDialogTypedInit<T> {
  openDialog(formType: Type<T>): void;
}

export class DialogSize {
  static readonly TINY = new DialogSize('TINY', {
    width: '',
    height: '',
  });
  static readonly SMALL_TINY = new DialogSize('SMALL_TINY', {
    width: '25vw',
    height: '40vh',
  });
  static readonly SMALL_MEDIUM = new DialogSize('SMALL_MEDIUM', {
    width: '380px',
    height: '',
  });
  static readonly SMALL = new DialogSize('SMALL', {
    // width: '45vw',
    width: '500px',
    height: '',
  });
  static readonly MEDIUM_SMALL = new DialogSize('MEDIUM_SMALL', {
    width: '45vw',
    height: '70vh',
  });
  static readonly MEDIUM = new DialogSize('MEDIUM', {
    width: '45vw',
    height: '90vh',
  });
  static readonly LARGE = new DialogSize('LARGE', {
    width: '45vw',
    height: '100vh',
  });
  static readonly EXTRA_LARGE = new DialogSize('EXTRA_LARGE', {
    width: '75vw',
    height: '100vh',
  });
  static readonly FULL = new DialogSize('FULL', {
    width: '100vw',
    height: '100vh',
  });

  private constructor(
    private readonly key: string,
    public readonly value: DialogSizeSpec,
  ) {}

  toString(): string {
    return this.key;
  }
}

interface DialogSizeSpec {
  width: string;
  height: string;
}

declare interface FooterAction {
  label: string;
  icon: string;
  class?: string;
  style?: string;
}
