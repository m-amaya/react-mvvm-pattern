import { signal } from '@preact/signals-core';
import { getDefaultChannelId } from '../get-default-channel-id.util';
import { getDefaultChannels } from '../get-default-channels.util';

describe(getDefaultChannelId.name, () => {
  it('should return the ID of the first channel', () => {
    const channels = signal(getDefaultChannels());

    const channelId = getDefaultChannelId(channels);

    expect(channelId).toBe(channels.value[0].id);
  });

  it('should throw an error if no channels are available', () => {
    const channels = signal([]);

    expect(() => getDefaultChannelId(channels)).toThrowError(
      'No channels available to get default channel ID'
    );
  });
});
