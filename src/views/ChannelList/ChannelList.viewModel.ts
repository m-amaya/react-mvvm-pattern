import { RootContext } from '@src/Root.context';
import { ChannelInterface } from '@src/types';
import { useContext } from 'react';
import { useSignalValue } from '../../hooks/useSignalValue';
import { ChannelsModelInterface } from '../../models/Channels';

export type ChannelListViewModelInterface = {
  channels: ChannelInterface[];
  channelCount: number;
  searchValue: string;
  selectedChannelId: string;
  addChannel: ChannelsModelInterface['addChannel'];
  selectChannel: ChannelsModelInterface['selectChannel'];
  setSearchValue: ChannelsModelInterface['setSearchValue'];
};

export const useChannelListViewModel = (): ChannelListViewModelInterface => {
  const { channels } = useContext(RootContext);

  return {
    channels: useSignalValue(channels.filteredList),
    channelCount: useSignalValue(channels.filteredListCount),
    searchValue: useSignalValue(channels.searchValue),
    selectedChannelId: useSignalValue(channels.selectedChannelId),
    addChannel: (...args) => channels.addChannel(...args),
    selectChannel: (...args) => channels.selectChannel(...args),
    setSearchValue: (...args) => channels.setSearchValue(...args),
  };
};
