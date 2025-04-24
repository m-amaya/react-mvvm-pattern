import { ButtonStyled } from '@src/components/Button';
import { InputStyled } from '@src/components/Input';
import { ChangeEventHandler, useState } from 'react';
import {
  ChannelNavStyled,
  ChannelTabStyled,
  ChannelTextStyled,
  RootStyled,
  SearchCellStyled,
  TitleCellStyled,
  TitleTextStyled,
} from './ChannelList.styled';
import { useChannelListViewModel } from './ChannelList.viewModel';

export const ChannelList = () => {
  const {
    channels,
    channelCount,
    searchValue,
    selectedChannelId,
    addChannel,
    setSearchValue,
    selectChannel,
  } = useChannelListViewModel();
  const [localSearchValue, setLocalSearchValue] = useState(searchValue);

  const setSearchValueHandler: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setLocalSearchValue(value);
    setSearchValue(value);
  };

  return (
    <RootStyled>
      <SearchCellStyled>
        <InputStyled
          $fullWidth
          placeholder='Search channels...'
          value={localSearchValue}
          onChange={setSearchValueHandler}
        />
      </SearchCellStyled>
      <TitleCellStyled>
        <TitleTextStyled>Channels ({channelCount})</TitleTextStyled>
        <ButtonStyled onClick={() => addChannel()}>Add</ButtonStyled>
      </TitleCellStyled>
      <ChannelNavStyled>
        {channels.map((channel) => (
          <ChannelTabStyled
            $selected={channel.id === selectedChannelId}
            key={channel.id}
            tabIndex={0}
            onClick={() => selectChannel(channel.id)}>
            <ChannelTextStyled>{channel.name}</ChannelTextStyled>
          </ChannelTabStyled>
        ))}
      </ChannelNavStyled>
    </RootStyled>
  );
};
