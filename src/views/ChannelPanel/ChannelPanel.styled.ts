import styled from 'styled-components';

export const RootStyled = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: var(--window-height);
`;

export const ChannelTitleBarStyled = styled.div`
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  padding: 32px 12px 8px;
`;

export const TitleTextStyled = styled.h3`
  margin: 0;
`;

export const ChatWindowStyled = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  overflow: auto;
  padding: 12px;
`;

export const ChatMessageBoxStyled = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px;
`;

export const InputWrapperStyled = styled.div`
  display: flex;
  flex: 1;
`;
