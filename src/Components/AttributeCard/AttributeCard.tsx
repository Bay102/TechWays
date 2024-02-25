import * as S from './attributeCard.styles'

type CardProps = {
  title: string
  attributes: string[]
}

const AttributeCard = ({ title, attributes }: CardProps) => {
  return (
    <S.CardContainer>
      <S.CardTitle>{title}</S.CardTitle>
    </S.CardContainer>
  )
}

export default AttributeCard
