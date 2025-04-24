import { signal } from '@preact/signals-core';
import { ChannelInterface } from '@src/types';
import { addChannelAction } from '../add-channel-action.util';

describe(addChannelAction.name, () => {
  it('should add a new channel to the list', () => {
    const channels = signal<ChannelInterface[]>([]);
    const initialLength = channels.value.length;

    addChannelAction(channels);

    const newChannel = channels.value[initialLength];

    expect(channels.value.length).toBe(initialLength + 1);
    expectTypeOf(newChannel).toEqualTypeOf<ChannelInterface>();
  });

  it('should generate a unique channel name', () => {
    const channels = signal<ChannelInterface[]>([]);

    addChannelAction(channels);

    const newChannel = channels.value[0];

    expect(newChannel.name).toMatch(/^[#a-zA-Z0-9_-]+$/);
  });

  it('should generate a unique channel ID', () => {
    const channels = signal<ChannelInterface[]>([]);

    addChannelAction(channels);

    const newChannel = channels.value[0];

    expect(newChannel.id).toMatch(/^[a-z0-9-]+$/);
  });
});
