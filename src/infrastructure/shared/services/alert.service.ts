import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

export enum MsgType {
  Success = 'success',
  Error = 'error',
  Warn = 'warn',
}

export const SPLIT_MESSAGE = '[SPLIT]';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private readonly _messageService: MessageService) {}

  addSuccessMsgs(msg: string[], title?: string, clearPrevious = false) {
    return msg.forEach((m) =>
      this.addMsg(MsgType.Success, m, title, clearPrevious)
    );
  }

  addSuccessMsg(msg: string, title?: string, clearPrevious = false) {
    return this.addMsg(MsgType.Success, msg, title, clearPrevious);
  }

  addFailedMsgs(msg: string[], clearPrevious = false) {
    return msg.forEach((m) =>
      this.addMsg(MsgType.Error, m, null, clearPrevious)
    );
  }

  addFailedMsg(msg: string, clearPrevious = false) {
    const splitMessages = msg.split(SPLIT_MESSAGE);
    if (splitMessages.length > 1) {
      return this.addFailedMsgs(splitMessages, clearPrevious);
    }

    return this.addMsg(MsgType.Error, msg, null, clearPrevious);
  }

  addWarnMsg(msg: string, title?: string | null, clearPrevious = false) {
    return this.addMsg(MsgType.Warn, msg, title, clearPrevious);
  }

  addWarnMsgs(msg: string[], title?: string, clearPrevious = false) {
    return msg.forEach((m) => this.addWarnMsg(m, null, clearPrevious));
  }

  addMsg(
    type: MsgType,
    msg: string,
    title?: string | null,
    clearPrevious = false
  ) {
    if (clearPrevious) {
      this.clear();
    }
    if (!title) {
      title = type == MsgType.Error ? 'Error' : 'Info';
    }
    this._messageService.add({
      severity: type,
      summary: title,
      detail: msg,
      life: 3000,
    });
  }

  clear() {
    this._messageService.clear();
  }
}
