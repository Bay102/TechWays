import {
  Attribute,
  AttributeObject,
} from '../AttributeCategorys/AttributesStore'
import * as S from './attributeCard.styles'

type CardProps = {
  title: string
  attributes: AttributeObject
}

const AttributeCard = ({ title, attributes }: CardProps) => {
  return (
    <S.CardContainer>
      <S.CardTitle>{title}</S.CardTitle>
      {Object.values(attributes).map((attribute: Attribute, _index: number) => (
        <div key={_index}>{attribute.label}</div>
      ))}
    </S.CardContainer>
  )
}

export default AttributeCard
