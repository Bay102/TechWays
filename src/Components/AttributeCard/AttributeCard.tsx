import { observer } from 'mobx-react'

import * as S from './attributeCard.styles'

type CardProps = {
  store?: any
}

const AttributeCard = observer(({ store }: CardProps) => {
  return <S.CardContainer>Attribute Card</S.CardContainer>
})

export default AttributeCard
