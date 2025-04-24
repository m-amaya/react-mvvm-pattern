import { ButtonStyled } from '../../components/Button';
import { InputStyled } from '../../components/Input';
import {
  ChannelNavStyled,
  ChannelTabStyled,
  ChannelTextStyled,
  RootStyled,
  SearchCellStyled,
  TitleCellStyled,
  TitleTextStyled,
} from './ChannelList.styled';

export const ChannelList = () => {
  return (
    <RootStyled>
      <SearchCellStyled>
        <InputStyled $fullWidth placeholder='Search channels...' />
      </SearchCellStyled>
      <TitleCellStyled>
        <TitleTextStyled>Channels</TitleTextStyled>
        <ButtonStyled>Add</ButtonStyled>
      </TitleCellStyled>
      <ChannelNavStyled>
        <ChannelTabStyled $selected tabIndex={0}>
          <ChannelTextStyled>#channel-name-text</ChannelTextStyled>
        </ChannelTabStyled>
        <ChannelTabStyled>
          <ChannelTextStyled>#channel-name-text</ChannelTextStyled>
        </ChannelTabStyled>
        <ChannelTabStyled>
          <ChannelTextStyled>#channel-name-text</ChannelTextStyled>
        </ChannelTabStyled>
        <ChannelTabStyled>
          <ChannelTextStyled>#channel-name-text</ChannelTextStyled>
        </ChannelTabStyled>
      </ChannelNavStyled>
    </RootStyled>
  );
};
