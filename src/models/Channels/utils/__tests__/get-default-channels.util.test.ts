import { ChannelInterface } from '@src/types';
import { getDefaultChannels } from '../get-default-channels.util';

describe(getDefaultChannels.name, () => {
  it('should return a default channel if local storage is empty', () => {
    const channels = getDefaultChannels();

    expect(channels).toHaveLength(1);
    expectTypeOf(channels[0]).toEqualTypeOf<ChannelInterface>();
    expect(channels[0].name).toBe('#default');
  });

  it('should return channels from local storage if available', () => {
    // TODO: Mock local storage to return channels
  });
});
