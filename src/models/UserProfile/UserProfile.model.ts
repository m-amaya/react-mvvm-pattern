import { computed, ReadonlySignal, signal, Signal } from '@preact/signals-core';
import { RoleType, UserProfileInterface } from '@src/types';
import { getDefaultProfile } from './utils/get-default-profile.util';
import { setProfileNameAction } from './utils/set-profile-name-action.util';

export type UserProfileModelInterface = InstanceType<typeof UserProfileModel>;

export class UserProfileModel {
  // Private signal store
  private readonly _profile: Signal<UserProfileInterface>;

  private readonly _profileName: ReadonlySignal<string> = computed(
    () => this._profile.value.name
  );

  constructor(role: RoleType) {
    this._profile = signal(getDefaultProfile(role));
  }

  // Getters
  public get profile(): ReadonlySignal<UserProfileInterface> {
    return this._profile;
  }

  public get profileName(): ReadonlySignal<string> {
    return this._profileName;
  }

  // Actions
  public setProfileName(name: string): void {
    console.log('setProfileName', name, this._profile);
    setProfileNameAction(this._profile, name);
  }
}
