import * as S from './attribute.styles'

type AttributeProps = {
  title: string
  attributes: string
}

const Attribute = ({ title, attributes }: AttributeProps) => {
  return <S.AttributeContainer></S.AttributeContainer>
}

export default Attribute
