import Attribute from '../Components/Attribute/Attribute'
import Navbar from '../Components/Navbar'
import * as S from './home.styles'

const Home = () => {
  return (
    <S.HomeContainer>
      <Navbar />
      <S.HeroContainer>
        <Attribute title="" attributes={''} />
        <Attribute title="" attributes={''} />
        <Attribute title="" attributes={''} />
      </S.HeroContainer>
    </S.HomeContainer>
  )
}

export default Home
