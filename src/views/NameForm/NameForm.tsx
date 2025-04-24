import { InputStyled } from '../../components/Input';
import { FieldsetStyled, LabelStyled, RootStyled } from './NameForm.styled';

export const NameForm = () => {
  return (
    <RootStyled>
      <FieldsetStyled>
        <LabelStyled htmlFor='username'>User:</LabelStyled>
        <InputStyled id='username' placeholder='Name' type='text' />
      </FieldsetStyled>
      <FieldsetStyled>
        <LabelStyled htmlFor='botname'>Chatbot:</LabelStyled>
        <InputStyled id='botname' placeholder='Name' type='text' />
      </FieldsetStyled>
    </RootStyled>
  );
};
