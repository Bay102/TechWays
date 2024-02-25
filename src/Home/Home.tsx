import Navbar from '../Components/Navbar'
import { Preferences } from '../Components/Preferences/Preferences'
import { PreferencesStore } from '../Components/Preferences/PreferencesStore'
import * as S from './home.styles'

const Home = () => {
  return (
    <S.HomeContainer>
      <Navbar />
      <Preferences store={PreferencesStore} />
    </S.HomeContainer>
  )
}

export default Home
