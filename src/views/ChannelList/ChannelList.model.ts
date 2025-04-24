import { ReadonlySignal, signal, Signal } from '@preact/signals-core';
import { ChannelInterface } from '@src/types';
import { addChannelAction } from './utils/add-channel-action.util';

export class ChannelListModel {
  // Private signal store
  private readonly _channels: Signal<ChannelInterface[]>;

  constructor() {
    this._channels = signal([]);
  }

  // Getters
  public get channels(): ReadonlySignal<ChannelInterface[]> {
    return this._channels;
  }

  // Actions
  public addChannel(name: string): void {
    addChannelAction(this.channels, name);
  }
}
