import { LocalStorageKeys } from '@src/constants';
import { ChatMessagesModel } from '@src/models/ChatMessages';
import { ChannelInterface } from '@src/types';
import ls from 'localstorage-slim';

export const getDefaultChannels = (): ChannelInterface[] => {
  const lsChannels = ls.get<ChannelInterface[]>(LocalStorageKeys.CHANNELS);
  const channelId = crypto.randomUUID();

  if (lsChannels && lsChannels.length > 0) {
    // TODO: Get messages from local storage
    return lsChannels;
  }

  return [
    {
      id: channelId,
      name: '#default',
      messages: new ChatMessagesModel(channelId),
    },
  ];
};
