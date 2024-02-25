import { makeAutoObservable } from 'mobx'

export type AttributeContainerProps = {
  attribute: string
  addAttribute: (attribute: string) => void
}

class AttributeContainerStore implements AttributeContainerProps {
  constructor() {
    makeAutoObservable(this)
  }

  attribute = 'test'

  addAttribute = (attribute: string) => {}
}

export const AttributesStore = new AttributeContainerStore()
