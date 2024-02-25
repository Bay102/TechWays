import { Attributes } from '../Components/Attributes/Attributes'
import { AttributesStore } from '../Components/Attributes/AttributesStore'
import Navbar from '../Components/Navbar'
import * as S from './home.styles'

const Home = () => {
  return (
    <S.HomeContainer>
      <Navbar />
      <S.Attributes>
        <Attributes store={AttributesStore} />
      </S.Attributes>
    </S.HomeContainer>
  )
}

export default Home
