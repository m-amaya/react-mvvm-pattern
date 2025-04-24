import { Signal } from '@preact/signals-core';
import { ChannelInterface } from '@src/types';

export const computeFilteredList = (
  channels: Signal<ChannelInterface[]>,
  searchValue: Signal<string>
) => {
  const searchValueLowerCase = searchValue.value.toLowerCase();

  return channels.value.filter((channel) =>
    channel.name.toLowerCase().includes(searchValueLowerCase)
  );
};
