import { ReadonlySignal, signal, Signal } from '@preact/signals-core';
import { ChannelInterface } from '@src/types';
import { addChannelAction } from './utils/add-channel-action.util';
import { getDefaultChannels } from './utils/get-default-channel.util';

export class ChannelsModel {
  // Private signal store
  private readonly _list: Signal<ChannelInterface[]>;

  constructor() {
    this._list = signal(getDefaultChannels());
  }

  // Getters
  public get list(): ReadonlySignal<ChannelInterface[]> {
    return this._list;
  }

  // Actions
  public addChannel(channelName: string): void {
    addChannelAction(this.list, channelName);
  }
}
