import { Signal } from '@preact/signals-core';
import { ChatMessagesModel } from '@src/models/ChatMessages';
import { ChannelInterface } from '@src/types';
import { generateUsername } from 'unique-username-generator';

export const addChannelAction = (channels: Signal<ChannelInterface[]>) => {
  const channelId = crypto.randomUUID();

  const newChannel: ChannelInterface = {
    id: crypto.randomUUID(),
    name: `#${generateUsername('-')}`,
    messages: new ChatMessagesModel(channelId),
  };

  const updatedChannels = [...channels.value, newChannel];

  channels.value = updatedChannels;
};
