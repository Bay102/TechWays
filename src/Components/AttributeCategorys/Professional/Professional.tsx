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
      <AttributeCard title="Professional" attributes={[]} />
      <AttributeCard title="Professional" attributes={[]} />
      <AttributeCard title="Professional" attributes={[]} />
      <AttributeCard title="Professional" attributes={[]} />
      <AttributeCard title="Professional" attributes={[]} />
    </S.ProfessionalContainer>
  )
})
