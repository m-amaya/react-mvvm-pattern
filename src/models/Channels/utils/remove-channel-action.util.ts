import { Signal } from '@preact/signals-core';
import { ChannelInterface } from '@src/types';

export const removeChannelAction = (
  channels: Signal<ChannelInterface[]>,
  channelIdToRemove: string
) => {
  const updatedChannels = channels.value.filter(
    (channel) => channel.id !== channelIdToRemove
  );

  channels.value = updatedChannels;
};
