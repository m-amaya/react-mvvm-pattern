import { signal } from '@preact/signals-core';
import { addChannelAction } from '../add-channel-action.util';
import { computeFilteredList } from '../compute-filtered-list.util';
import { getDefaultChannels } from '../get-default-channels.util';
import { renameChannelAction } from '../rename-channel-action.util';

describe(computeFilteredList.name, () => {
  const channels = signal(getDefaultChannels());
  const selectedChannelId = signal('');
  const searchValue = signal('');

  it('should return a list of channels that match the search value', () => {
    addChannelAction(channels);
    addChannelAction(channels);
    addChannelAction(channels);
    selectedChannelId.value = channels.value[2].id;
    renameChannelAction(channels, selectedChannelId, 'renamed-channel');
    searchValue.value = 'renamed';

    const result = computeFilteredList(channels, searchValue);

    expect(channels.value.length).toEqual(4);
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual(selectedChannelId.value);
  });
});
