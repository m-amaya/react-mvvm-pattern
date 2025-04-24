import { Signal } from '@preact/signals-core';
import { ChannelInterface } from '../../../types';

export const computeSelectedChannel = (
  channels: Signal<ChannelInterface[]>,
  selectedChannelId: Signal<string>
) => {
  return channels.value.find(
    (channel) => channel.id === selectedChannelId.value
  );
};
