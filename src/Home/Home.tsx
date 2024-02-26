import Navbar from "../Components/Navbar";
import { Interests } from "../Components/AttributeCategorys/Interests/Interests";
import { Preferences } from "../Components/AttributeCategorys/Preferences/Preferences";
import { AttributesStore } from "../Components/AttributeCategorys/AttributesStore";
import { Professional } from "../Components/AttributeCategorys/Professional/Professional";
import * as S from "./home.styles";
import TechTrackWindow from "../Components/TechTrackWindow/TechTrackWindow";

const Home = () => {
  return (
    <S.HomeContainer>
      <Navbar />
      <S.AttributesContainer>
        <Interests attributeStore={AttributesStore} />
        <Professional attributeStore={AttributesStore} />
      </S.AttributesContainer>
      <S.AttributesContainer>
        <Preferences attributeStore={AttributesStore} />
        <TechTrackWindow />
      </S.AttributesContainer>
    </S.HomeContainer>
  );
};

export default Home;
