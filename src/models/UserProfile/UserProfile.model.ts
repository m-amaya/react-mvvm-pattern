import { computed, ReadonlySignal, signal, Signal } from '@preact/signals-core';
import { RoleType, UserProfileInterface } from '../../types';
import { getDefaultUser } from './get-default-user.util';
import { setUserNameAction } from './set-user-name-action.util';

export class UserModel {
  // Private state
  private readonly _user: Signal<UserProfileInterface>;

  private readonly _userName: ReadonlySignal<string> = computed(
    () => this._user.value.name
  );

  constructor(role: RoleType) {
    this._user = signal(getDefaultUser(role));
  }

  // Getters
  public get user(): ReadonlySignal<UserProfileInterface | undefined> {
    return this._user;
  }

  public get userName(): ReadonlySignal<string | undefined> {
    return this._userName;
  }

  // Actions
  public setUserName(name: string): void {
    setUserNameAction(this._user, name);
  }
}
