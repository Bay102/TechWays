import * as S from './professional.styles'
import AttributeCard from '../../AttributeCard/AttributeCard'
import { AttributeStoreProps } from '../AttributesStore'
import { observer } from 'mobx-react'

type Props = {
  attributeStore: AttributeStoreProps
}

export const Professional = observer(({ attributeStore }: Props) => {
  return (
    <S.ProfessionalContainer>
      <AttributeCard
        title="Paths"
        attributes={attributeStore.professionalChoices.paths}
      />
      <AttributeCard
        title="Industry"
        attributes={attributeStore.professionalChoices.goals}
      />
      <AttributeCard
        title="Goals"
        attributes={attributeStore.professionalChoices.industry}
      />
      <AttributeCard
        title="Market Difficulty"
        attributes={attributeStore.professionalChoices.marketDifficulty}
      />
      <AttributeCard
        title="Skill Level"
        attributes={attributeStore.professionalChoices.skillLevel}
      />
      <AttributeCard title="Industry" attributes={attributeStore.industry} />
      <AttributeCard title="Goals" attributes={attributeStore.goals} />
      <AttributeCard title="Paths" attributes={[]} />
      <AttributeCard title="Market Difficulty" attributes={[]} />
      <AttributeCard title="Skill Level" attributes={[]} />
    </S.ProfessionalContainer>
  )
})
