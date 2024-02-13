import { makeAutoObservable } from 'mobx'

class ValuesCarouselStore {
  constructor() {
    makeAutoObservable(this)
  }
}

export const valuesCarouselStore = new ValuesCarouselStore()
