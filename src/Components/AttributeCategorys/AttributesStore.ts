import { makeAutoObservable } from 'mobx'

export type AttributeStoreProps = {
  //
}

class AttributeStore implements AttributeStoreProps {
  constructor() {
    makeAutoObservable(this)
  }
}

export const AttributesStore = new AttributeStore()
