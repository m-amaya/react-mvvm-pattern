import { ReadonlySignal, signal, Signal } from '@preact/signals-core';
import { ChatMessageInterface } from '../../types';

export type ChatMessagesModelInterface = InstanceType<typeof ChatMessagesModel>;

export class ChatMessagesModel {
  // Private signal store
  private readonly _channelId: Signal<string>;
  private readonly _list: Signal<ChatMessageInterface[]>;

  constructor(channelId: string) {
    this._channelId = signal(channelId);
    this._list = signal([]);
  }

  // Getters
  public get list(): ReadonlySignal<ChatMessageInterface[]> {
    return this._list;
  }
}
