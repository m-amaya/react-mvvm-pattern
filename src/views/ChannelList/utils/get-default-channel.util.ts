import { LocalStorageKeys } from '@src/constants';
import { ChannelInterface } from '@src/types';
import ls from 'localstorage-slim';

export const getDefaultChannels = (): ChannelInterface[] => {
  const lsChannels = ls.get<ChannelInterface[]>(LocalStorageKeys.CHANNELS);

  if (lsChannels) {
    return lsChannels;
  }

  return [
    {
      id: crypto.randomUUID(),
      name: 'default',
      messages: [],
    },
  ];
};
