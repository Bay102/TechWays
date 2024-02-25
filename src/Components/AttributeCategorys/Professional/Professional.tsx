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
      <AttributeCard title="Paths" attributes={[]} />
      <AttributeCard title="Industry" attributes={[]} />
      <AttributeCard title="Goals" attributes={[]} />
      <AttributeCard title="Market Difficulty" attributes={[]} />
      <AttributeCard title="Skill Level" attributes={[]} />
    </S.ProfessionalContainer>
  )
})
