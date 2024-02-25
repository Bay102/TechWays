import { observer } from 'mobx-react'
import * as S from './preferences.styles'
import { AttributeStoreProps } from '../AttributesStore'
import AttributeCard from '../../AttributeCard/AttributeCard'

type Props = {
  attributeStore: AttributeStoreProps
}

export const Preferences = observer(({ attributeStore }: Props) => {
  return (
    <S.PreferencesContainer>
      <AttributeCard title="Preferences" attributes={[]} />
      <AttributeCard title="Preferences" attributes={[]} />
      <AttributeCard title="Preferences" attributes={[]} />
      <AttributeCard title="Preferences" attributes={[]} />
      <AttributeCard title="Preferences" attributes={[]} />
    </S.PreferencesContainer>
  )
})
