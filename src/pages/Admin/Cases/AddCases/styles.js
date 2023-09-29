import styled from "styled-components";
import uploadIcon from "../../../../assets/icons/uploadCloud.svg";


export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

Wrapper.Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
`;

Wrapper.Title = styled.h3`
     color: #051313;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
`;

Wrapper.Nav = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: end;
`;


Wrapper.InputTable = styled.div`
    width: 100%;
    .imageInputWrap{
        width: 311px;
        height: 188px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px #d9d9d9 dashed;
        border-radius: 20px;
    }
    .imageInput{
        display: none;
    }
    .Wrapper-input-f {
      border-radius: 20px;
      border: 1px dashed #e1e1e1;
      background: #FFFFFF;
      width: 100%;
      max-width: 375px;
      height: 178px;
      position: relative;
      background-image: url(${uploadIcon});
      background-position: center;
      background-repeat: no-repeat;
      margin: 0 0 0 0;
      input[type='file'] {
        cursor: pointer;
      }

      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 15px);
        content: 'Upload a cover';
      }
	}
	& > .fileName {
		margin-left: 1%;
		font-size: 25px;
	}
    
`;