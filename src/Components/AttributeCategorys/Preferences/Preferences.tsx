import { observer } from 'mobx-react'
import * as S from './preferences.styles'
import { AttributeStoreProps } from '../AttributesStore'

type Props = {
  store: AttributeStoreProps
}

export const Preferences = observer(({ store }: Props) => {
  return <S.PreferencesContainer></S.PreferencesContainer>
})
