import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  gap: 33px;
  background-color: #fff;
  padding-top: 20px;
  border-right: 1px solid #d9d9d9;
  background: #fff;
`;

Container.SideWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

Container.List = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  &:hover {
    h3 {
      color: rgba(0, 146, 153, 1);
      transition: 0.7s;
    }
    svg {
      path {
        fill: rgba(0, 146, 153, 1);
        transition: 0.7s;
      }
    }
  }
`;

Container.Title = styled.h3`
  color: #051313;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24.5px;
`;
Container.Flex = styled.div`
	
	display: flex;
	align-items: center;
	gap: 5px;
	padding: 12px 40px;
	cursor: ${({ disable }) => (disable ? 'not-allowed' : 'pointer')};
	opacity: ${({ disable }) => (disable ? '0.5' : '1')};
	background: ${({ active }) => active && '#f4f7f4'};
	border-radius: 100px;
	p {
		color: ${({ active }) => active && '#37a67e'};
	}
	svg {
		path {
			fill: ${({ active }) => active && '#37a67e'};
		}
	}
	&:hover {
		background-color: ${({ disable }) => !disable && '#f4f7f4'};
		/* p {
			color: ${({ disable }) => !disable && '#37a67e'};
		} */
		/* svg {
			path {
				fill: ${({ disable }) => !disable && '#37a67e'};
			}
		} */
	}
`;
