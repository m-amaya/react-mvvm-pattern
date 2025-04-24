import { InputStyled } from '@src/components/Input';
import { ChangeEventHandler, useState } from 'react';
import { FieldsetStyled, LabelStyled, RootStyled } from './NameForm.styled';
import { useNameFormViewModel } from './NameForm.viewModel';

export const NameForm = () => {
  const { botName, userName, setBotName, setUserName } = useNameFormViewModel();
  const [localBotName, setLocalBotName] = useState(botName);
  const [localUserName, setLocalUserName] = useState(userName);

  const setBotNameHandler: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setLocalBotName(value);
    setBotName(value);
  };

  const setUserNameHandler: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setLocalUserName(value);
    setUserName(value);
  };

  return (
    <RootStyled data-testid='name-form'>
      <FieldsetStyled>
        <LabelStyled htmlFor='username'>User:</LabelStyled>
        <InputStyled
          data-testid='username'
          id='username'
          placeholder='Name'
          type='text'
          value={localUserName}
          onChange={setUserNameHandler}
        />
      </FieldsetStyled>
      <FieldsetStyled>
        <LabelStyled htmlFor='botname'>Chatbot:</LabelStyled>
        <InputStyled
          data-testid='botname'
          id='botname'
          placeholder='Name'
          type='text'
          value={localBotName}
          onChange={setBotNameHandler}
        />
      </FieldsetStyled>
    </RootStyled>
  );
};
