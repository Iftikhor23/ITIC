import styled from "styled-components";
import bacground from '../../assets/images/branch.png';

export const Container = styled.div`
  width: 180vw;
  height: 100vh;
  background: url(${bacground});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 271px;
  z-index: 1;
  .image{
    position: relative;
    .soonUsa{
      position: absolute;
      left: 252px;
    top: 195px;

    }
    .soonBra{
      position: absolute;
      left: 421px;
    bottom: 184px;
    
    }
    .uzbLoc{
      position: absolute;
      top: 182px;
    right: 332px;
    }
    .sinLoc{
      position: absolute;
      top: 293px;
    right: 200px;
    }
  }
`;

Container.Text = styled.div`
  z-index: 1;
`;
