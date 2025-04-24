import { Signal } from '@preact/signals-core';
import { ChannelInterface } from '@src/types';

export const addChannelAction = (
  channels: Signal<ChannelInterface[]>,
  channelName: string
) => {
  const newChannel: ChannelInterface = {
    id: crypto.randomUUID(),
    name: channelName,
    messages: [],
  };

  channels.value.push(newChannel);
};
