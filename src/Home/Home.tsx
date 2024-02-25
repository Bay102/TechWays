import { Preferences } from '../Components/Preferences/Preferences'
import { PreferencesStore } from '../Components/Preferences/PreferencesStore'
import Navbar from '../Components/Navbar'
import * as S from './home.styles'

const Home = () => {
  return (
    <S.HomeContainer>
      <Navbar />
      <S.PreferencesContainer>
        <Preferences store={PreferencesStore} />
      </S.PreferencesContainer>
    </S.HomeContainer>
  )
}

export default Home
