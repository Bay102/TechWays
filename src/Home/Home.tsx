import Navbar from '../Components/Navbar'
import { Interests } from '../Components/AttributeCategorys/Interests/Interests'
import { Preferences } from '../Components/AttributeCategorys/Preferences/Preferences'
import { AttributesStore } from '../Components/AttributeCategorys/AttributesStore'
import { Professional } from '../Components/AttributeCategorys/Professional/Professional'
import * as S from './home.styles'

const Home = () => {
  return (
    <S.HomeContainer>
      <Navbar />
      <S.AttributesContainer>
        <Interests attributeStore={AttributesStore} />
        <Professional attributeStore={AttributesStore} />
        <Preferences attributeStore={AttributesStore} />
      </S.AttributesContainer>
    </S.HomeContainer>
  )
}

export default Home
