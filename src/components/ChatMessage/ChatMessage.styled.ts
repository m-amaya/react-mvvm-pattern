import styled from 'styled-components';

export const RootStyled = styled.div<{ $isBot: boolean }>`
  display: flex;
  justify-content: ${({ $isBot }) => ($isBot ? 'flex-end' : 'flex-start')};
  width: 100%;
`;

export const ContentStyled = styled.div<{ $isBot: boolean }>`
  display: flex;
  flex-direction: ${({ $isBot }) => ($isBot ? 'row-reverse' : 'row')};
  gap: 8px;
  max-width: 300px;
  width: 100%;
`;

export const MessageStyled = styled.div<{ $isBot: boolean }>`
  align-items: ${({ $isBot }) => ($isBot ? 'flex-end' : 'flex-start')};
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px;
`;

export const UsernameTextStyled = styled.div<{ $isBot: boolean }>`
  color: ${({ $isBot }) =>
    $isBot ? 'var(--color-chatbot)' : 'var(--color-user)'};
  display: flex;
  font-weight: bold;
`;

export const MessageTextStyled = styled.div`
  display: flex;
  text-align: justify;
`;
