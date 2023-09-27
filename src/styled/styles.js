import styled from "styled-components";

export const HeadingOne = styled.h1`
  font-size: 72px;
  font-weight: 500;
  margin: 5px;
  background: -webkit-linear-gradient(left, black, #fff, black);
  background-size: 1600px 200px;
  -webkit-background-clip: text;
  background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 2s linear infinite;

  @keyframes textShine {
    0% {
      background-position: 0 1600px;
    }
    100% {
      background-position: 1600px 0;
    }
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ color }) => (color ? color : "rgba(255, 255, 255, 0.6)")};
  width: ${({ width }) => (width ? width : "376px")};
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 13px;
`;

export const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  gap: 20px;
`;

export const ScrollAnimationOne = styled.div`
  animation: scroll 25s linear infinite;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`;

export const ScrollAnimationTwo = styled.div`
  animation: scroll2 25s linear infinite;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;
  @keyframes scroll2 {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;