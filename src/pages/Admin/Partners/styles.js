import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

Wrapper.Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 24px;
`;

Wrapper.Header = styled.p`
  color: #000000;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
`;

Wrapper.Nav = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  width: 100%;
  height: 50px;
`;

Wrapper.WrapTable = styled.div`
  width: 100%;
  height: 95%;
`;
Wrapper.Box = styled.div`
	display: flex;
	width: 33px;
	height: 33px;
	padding: 4px 6px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
	border-radius: 100px;
	border: 1px solid #eee;
	cursor: pointer;
`;
Wrapper.Flex = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
  .blogImgRen {
		width: 69px;
		height: 44px;
		border-radius: 6px;
		border: 1px solid #eee;
		object-fit: cover;
	}
`;