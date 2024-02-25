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
      <AttributeCard title="Length" attributes={[]} />
      <AttributeCard title="In-Person/Remote" attributes={[]} />
      <AttributeCard title="Learning Format" attributes={[]} />
      <AttributeCard title="Community" attributes={[]} />
      <AttributeCard title="Mentorship" attributes={[]} />
    </S.PreferencesContainer>
  )
})
