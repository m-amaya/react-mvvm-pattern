import { Signal } from '@preact/signals-core';
import { ChannelInterface } from '@src/types';
import { hyphenate } from '@src/utils/hyphenate.util';

export const renameChannelAction = (
  channels: Signal<ChannelInterface[]>,
  selectedChannelId: Signal<string>,
  updatedChannelName: string
) => {
  const updatedChannels = channels.value.map((channel) => {
    if (channel.id === selectedChannelId.value) {
      return { ...channel, name: `#${hyphenate(updatedChannelName)}` };
    }
    return channel;
  });

  channels.value = updatedChannels;
};
