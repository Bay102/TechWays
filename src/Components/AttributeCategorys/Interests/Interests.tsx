import { observer } from 'mobx-react'
import AttributeCard from '../../AttributeCard/AttributeCard'
import { AttributeStoreProps } from '../AttributesStore'
import * as S from './interests.styles'

type Props = {
  attributeStore: AttributeStoreProps
}

export const Interests = observer(({ attributeStore }: Props) => {
  return (
    <S.InterestsContainer>
      <AttributeCard
        title="Intrigued By.."
        attributes={attributeStore.intriguedBy}
      />
      <AttributeCard
        title="Personality"
        attributes={attributeStore.personality}
      />
    </S.InterestsContainer>
  )
})