import { ChannelInterface } from '../../types';
import { ChannelsModel } from './Channels.model';

describe(ChannelsModel.name, () => {
  it('should create a default channel list', () => {
    const channelsModel = new ChannelsModel();
    const defaultChannels = channelsModel.list.value;
    const defaultSelectedChannelId = channelsModel.selectedChannelId.value;

    expect(defaultChannels.length).toEqual(1);
    expect(defaultChannels[0].id).toEqual(defaultSelectedChannelId);
    expectTypeOf(defaultChannels[0]).toEqualTypeOf<ChannelInterface>();
  });

  it('should select the proper channel', () => {
    const channelsModel = new ChannelsModel();
    channelsModel.addChannel();
    const channelToSelect = channelsModel.list.value[1];
    channelsModel.selectChannel(channelToSelect.id);

    expect(channelsModel.list.value.length).toEqual(2);
    expect(channelsModel.selectedChannelId.value).toEqual(channelToSelect.id);
  });

  it('should filter list based on search value', () => {
    const searchValue = 'rename';
    const channelsModel = new ChannelsModel();
    channelsModel.addChannel();
    channelsModel.addChannel();
    channelsModel.addChannel();
    channelsModel.selectChannel(channelsModel.list.value[2].id);
    channelsModel.renameChannel('renamed channel');
    channelsModel.selectChannel(channelsModel.list.value[3].id);
    channelsModel.renameChannel('another renamed channel');
    channelsModel.setSearchValue(searchValue);

    expect(channelsModel.list.value.length).toEqual(4);
    expect(channelsModel.filteredList.value.length).toEqual(2);
    expect(channelsModel.filteredListCount.value).toEqual(2);
    expect(channelsModel.searchValue.value).toEqual(searchValue);
  });
});
