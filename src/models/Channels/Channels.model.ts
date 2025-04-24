import { computed, ReadonlySignal, signal, Signal } from '@preact/signals-core';
import { ChannelInterface } from '@src/types';
import { addChannelAction } from './utils/add-channel-action.util';
import { computeFilteredList } from './utils/compute-filtered-list.util';
import { computeSelectedChannel } from './utils/compute-selected-channel.util';
import { getDefaultChannelId } from './utils/get-default-channel-id.util';
import { getDefaultChannels } from './utils/get-default-channels.util';
import { removeChannelAction } from './utils/remove-channel-action.util';
import { renameChannelAction } from './utils/rename-channel-action.util';

export type ChannelsModelInterface = InstanceType<typeof ChannelsModel>;

export class ChannelsModel {
  // Private signal store
  private readonly _list: Signal<ChannelInterface[]>;
  private readonly _selectedChannelId: Signal<string>;
  private readonly _searchValue: Signal<string>;

  private readonly _selectedChannel = computed(() =>
    computeSelectedChannel(this._list, this._selectedChannelId)
  );

  private readonly _filteredList: ReadonlySignal<ChannelInterface[]> = computed(
    () => computeFilteredList(this._list, this._searchValue)
  );

  private readonly _filteredListCount: ReadonlySignal<number> = computed(
    () => this._filteredList.value.length
  );

  constructor() {
    this._list = signal(getDefaultChannels());
    this._selectedChannelId = signal(getDefaultChannelId(this._list));
    this._searchValue = signal('');
  }

  // Getters
  public get list(): ReadonlySignal<ChannelInterface[]> {
    return this._list;
  }

  public get filteredList(): ReadonlySignal<ChannelInterface[]> {
    return this._filteredList;
  }

  public get filteredListCount(): ReadonlySignal<number> {
    return this._filteredListCount;
  }

  public get searchValue(): ReadonlySignal<string> {
    return this._searchValue;
  }

  public get selectedChannelId(): ReadonlySignal<string> {
    return this._selectedChannelId;
  }

  public get selectedChannel(): ReadonlySignal<ChannelInterface | undefined> {
    return this._selectedChannel;
  }

  // Actions
  public addChannel(): void {
    addChannelAction(this.list);
  }

  public removeChannel(channelId: string): void {
    removeChannelAction(this.list, channelId);
  }

  public selectChannel(channelId: string): void {
    this._selectedChannelId.value = channelId;
  }

  public renameChannel(channelName: string): void {
    renameChannelAction(this.list, this._selectedChannelId, channelName);
  }

  public setSearchValue(searchValue: string): void {
    this._searchValue.value = searchValue;
  }
}
