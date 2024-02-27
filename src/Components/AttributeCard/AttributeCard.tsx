import { observer } from 'mobx-react'

import {
  AttributesStore,
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
        <S.Text
          key={_index}
          onClick={() => AttributesStore.onSelected(attribute)}
          selected={attribute.selected}
        >
          {attribute.label}
        </S.Text>
      ))}
    </S.CardContainer>
  )
}

const ObservedAttributeCard = observer(AttributeCard)
export default ObservedAttributeCard
