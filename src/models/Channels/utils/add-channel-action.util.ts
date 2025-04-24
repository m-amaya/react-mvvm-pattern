import { Signal } from '@preact/signals-core';
import { ChatMessagesModel } from '@src/models/ChatMessages';
import { ChannelInterface } from '@src/types';
import ls from 'localstorage-slim';
import { LocalStorageKeys } from '../../../constants';

export const addChannelAction = (
  channels: Signal<ChannelInterface[]>,
  channelName: string
) => {
  const newChannel: ChannelInterface = {
    id: crypto.randomUUID(),
    name: channelName,
    messages: new ChatMessagesModel(),
  };

  const updatedChannels = [...channels.value, newChannel];

  channels.value = updatedChannels;
  ls.set(LocalStorageKeys.CHANNELS, updatedChannels);
};
