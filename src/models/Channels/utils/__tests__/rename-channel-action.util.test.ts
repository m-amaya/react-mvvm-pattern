import { signal } from '@preact/signals-core';
import { ChannelInterface } from '@src/types';
import { getDefaultChannels } from '../get-default-channels.util';
import { renameChannelAction } from '../rename-channel-action.util';

describe(renameChannelAction.name, () => {
  it('should rename the selected channel', () => {
    const channels = signal<ChannelInterface[]>(getDefaultChannels());
    const selectedChannelId = signal<string>(channels.value[0].id);
    const updatedChannelName = 'Renamed Channel';
    const expectedChannelName = '#renamed-channel';

    renameChannelAction(channels, selectedChannelId, updatedChannelName);

    expect(channels.value[0].name).toBe(expectedChannelName);
  });
});
