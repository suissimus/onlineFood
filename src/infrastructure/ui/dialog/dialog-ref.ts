import { Observable, Subject } from 'rxjs';

export class DialogRef {
  private readonly _onSubmit = new Subject<any>();
  onSubmit: Observable<any> = this._onSubmit.asObservable();
  private readonly _onClose = new Subject<any>();
  onClose: Observable<any> = this._onClose.asObservable();
  private readonly _onDestroy = new Subject<any>();
  onDestroy: Observable<any> = this._onDestroy.asObservable();

  constructor() {}

  close(result?: any) {
    this._onClose.next(result);
  }

  destroy() {
    this._onDestroy.next(0);
  }

  submit() {
    this._onSubmit.next(1);
  }
}
