import { Signal } from '@preact/signals-core';
import { ChannelInterface } from '../../../types';

export const getDefaultChannelId = (channels: Signal<ChannelInterface[]>) => {
  const firstChannel = channels.value[0];

  if (firstChannel) {
    return firstChannel.id;
  }

  throw new Error('No channels available to get default channel ID');
};
