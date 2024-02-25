import { observer } from 'mobx-react'
import * as S from './preferences.styles'
import { AttributeContainerProps } from './PreferencesStore'
import AttributeCard from '../AttributeCard/AttributeCard'

type PreferencesProps = {
  store: AttributeContainerProps
}

export const Preferences = observer(({ store }: PreferencesProps) => {
  return (
    <S.PreferencesContainer>
      <AttributeCard store={store} />
      <AttributeCard store={store} />
      <AttributeCard store={store} />
    </S.PreferencesContainer>
  )
})
