import { defaultRootContext, RootProvider } from '@src/Root.context';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { NameForm } from './NameForm';

describe(NameForm.name, () => {
  it('should render correctly', () => {
    render(
      <RootProvider value={defaultRootContext}>
        <NameForm />
      </RootProvider>
    );

    const nameFormElement = screen.getByTestId('name-form');

    expect(nameFormElement).toBeTruthy();
  });

  it('should render default user name value in user name input', () => {
    render(
      <RootProvider value={defaultRootContext}>
        <NameForm />
      </RootProvider>
    );

    const inputElement = screen.getByTestId<HTMLInputElement>('username');

    expect(inputElement.value).toBe(defaultRootContext.user.profileName.value);
  });

  it('should render new user name on user name input change', async () => {
    render(
      <RootProvider value={defaultRootContext}>
        <NameForm />
      </RootProvider>
    );

    const inputElement = screen.getByTestId<HTMLInputElement>('username');

    await userEvent.clear(inputElement);
    await userEvent.type(inputElement, 'new-user-name');

    expect(inputElement.value).toBe('new-user-name');
  });

  it('should render default bot name value in bot name input', () => {
    render(
      <RootProvider value={defaultRootContext}>
        <NameForm />
      </RootProvider>
    );

    const inputElement = screen.getByTestId<HTMLInputElement>('botname');

    expect(inputElement.value).toBe(
      defaultRootContext.chatbot.profileName.value
    );
  });

  it('should render new bot name on bot name input change', async () => {
    render(
      <RootProvider value={defaultRootContext}>
        <NameForm />
      </RootProvider>
    );

    const inputElement = screen.getByTestId<HTMLInputElement>('botname');

    await userEvent.clear(inputElement);
    await userEvent.type(inputElement, 'new-bot-name');

    expect(inputElement.value).toBe('new-bot-name');
  });
});
