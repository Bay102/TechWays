import { observer } from 'mobx-react'
import * as S from './preferences.styles'
import { PreferencesStoreProps } from './PreferencesStore'
import { Interests } from '../Interests/Interests'

export const Preferences = observer(({ store }: PreferencesStoreProps) => {
  return (
    <S.PreferencesContainer>
      <Interests />
    </S.PreferencesContainer>
  )
})
