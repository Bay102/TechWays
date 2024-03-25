import Navbar from "../Components/Navbar";
import * as S from "./home.styles";
import TechTrackWindow from "../Components/TechTrackWindow/TechTrackWindow";
import { Accordian } from "../DaisyComponents/Accordian";

const Home = () => {
  return (
    <>
      <S.HomeContainer>
        <Navbar />
        {/* <how it works comp></how> */}
        <S.BodyContainer>
          <Accordian />
          <TechTrackWindow />
        </S.BodyContainer>
      </S.HomeContainer>
    </>
  );
};

export default Home;
