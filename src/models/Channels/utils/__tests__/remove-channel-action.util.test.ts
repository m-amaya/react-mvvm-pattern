import { signal } from '@preact/signals-core';
import { ChannelInterface } from '@src/types';
import { addChannelAction } from '../add-channel-action.util';
import { getDefaultChannels } from '../get-default-channels.util';
import { removeChannelAction } from '../remove-channel-action.util';

describe(removeChannelAction.name, () => {
  it('should remove a channel from the list', () => {
    const channels = signal<ChannelInterface[]>(getDefaultChannels());
    addChannelAction(channels);
    addChannelAction(channels);
    const channelIdToRemove = channels.value[1].id;

    removeChannelAction(channels, channelIdToRemove);

    expect(channels.value.length).toBe(2);
    expect(
      channels.value.find((channel) => channel.id === channelIdToRemove)
    ).toBeUndefined();
  });

  it('should not remove any channel if the ID does not exist', () => {
    const channels = signal<ChannelInterface[]>(getDefaultChannels());
    const nonExistentChannelId = 'non-existent-id';

    removeChannelAction(channels, nonExistentChannelId);

    expect(channels.value.length).toBe(1);
  });
});
