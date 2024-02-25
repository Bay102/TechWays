import { observer } from 'mobx-react'
import * as S from './preferences.styles'
import { AttributeContainerProps } from './PreferencesStore'

type PreferencesProps = {
  store: AttributeContainerProps
}

export const Preferences = observer(({ store }: PreferencesProps) => {
  return <S.AttributeContainer>{store.attribute}</S.AttributeContainer>
})
