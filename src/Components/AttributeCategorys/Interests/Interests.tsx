import AttributeCard from '../../AttributeCard/AttributeCard'
import * as S from './interests.styles'

export const Interests = () => {
  return (
    <S.InterestsContainer>
      <AttributeCard title="Intrigued By.." attributes={[]} />
      <AttributeCard title="Personality" attributes={[]} />
    </S.InterestsContainer>
  )
}
