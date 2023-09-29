import { useRef, useState } from "react";
import { Wrapper } from "./styles";
import Button from "../../../../components/ButtonComb/Button";
import Cancel from "../../../../components/CancelButton/Cancel";
import uploadIcon from "../../../../assets/icons/uploadCloud.svg";
import AdminInput from "../../../../components/Reusable/AdminInput";

function AddCase() {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleIconClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };
  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Title>Add Case</Wrapper.Title>
        <Wrapper.Nav>
          <Cancel />
          <Button
            btnheight="42px"
            btnwidth="135px"
            title="Save changes"
            fontSize="14px"
            aHeight="42px"
            aWidth="42px"
            iconSize="24px"
          />
        </Wrapper.Nav>
        <Wrapper.InputTable>
          <div
            className="imageInputWrap"
            style={{
              backgroundImage: image
                ? `url(${URL.createObjectURL(image)})`
                : "none",
            }}
            onClick={handleIconClick}
          >
            {image ? null : <img src={uploadIcon} alt="upload cloud" />}
          </div>
          <input
            className="imageInput"
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <Wrapper.Flex>
            <AdminInput label={"Project name"} placeholder={"Project name"} />
            <AdminInput label={"Project type"} placeholder={"Project type"} />
          </Wrapper.Flex>
        </Wrapper.InputTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default AddCase;
