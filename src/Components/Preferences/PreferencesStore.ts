import { makeAutoObservable } from 'mobx'

export type PreferencesStoreProps = {
  //
}

class PreferenceStore implements PreferencesStoreProps {
  constructor() {
    makeAutoObservable(this)
  }
}

export const PreferencesStore = new PreferenceStore()
