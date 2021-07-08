import styled from "styled-components";

export const HomeContainer = styled.div`
  color: #fff;
  z-index: 1;
`;

export const HomeWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const HomeBg = styled.svg`
  height: 100vh;
  width: 100vw;
  fill: #0271b1;
  position: absolute;
  z-index: 1;
`;

export const HomeRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  position: relative;

  height: 100vh;
`;

export const Column1 = styled.div`
  grid-area: col1;
  max-width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
`;
export const Column2 = styled.div`
  grid-area: col2;
  display: grid;
  height: 100vh;
  align-items: end;
  justify-content: start;
`;

export const Column1Wrapper = styled.div`
  padding-top: 0;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
`;

export const Column2Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 75px;
  width: 100%;
  height: 45%;
  display: flex;
  align-items: flex-end;
  margin-left: 50px;
  margin-bottom: 0;
  margin-top: 0;
  @media screen and (max-width: 1300px) {
    font-size: 60px;
    margin-left: 40px;
  }
  @media screen and (max-width: 1150px) {
    font-size: 50px;
    margin-left: 30px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 45px;
    margin-left: 20px;
  }
`;
export const Paragraph = styled.p`
  font-size: 30px;
  width: 65%;
  margin-left: 40px;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 1150px) {
    font-size: 20px;
    margin-left: 30px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 20px;
    margin-left: 20px;
  }
`;

export const Svg = styled.img`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  /* margin-top: 50px; */
  left: 15%;
  width: 70%;
  margin-top: 40px;
  /* background: #0ae00a; */
  display: grid;
  justify-content: center;
`;
