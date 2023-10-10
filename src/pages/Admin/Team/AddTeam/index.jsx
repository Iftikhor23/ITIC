import { useRef, useState } from "react";
import { Wrapper } from "./styles";
import uploadIcon from "../../../../assets/icons/uploadCloud.svg";
import AdminInput from "../../../../components/Reusable/AdminInput";
import Button from "../../../../components/Reusable/ButtonComb/Button";
import RegularButton from "../../../../components/Reusable/RegularButton";
import { useNavigate } from "react-router-dom";

function AddTeam() {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleIconClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(event.target.files[0]);
  };

  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/admin/team");
  };

  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Title>Add Member</Wrapper.Title>
        <Wrapper.Nav>
          <div onClick={handleNav}>
            <RegularButton title={"Cancel"} />
          </div>
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
          <Wrapper.WrapTable>
            <Wrapper.Flex>
              <AdminInput label={"Enter name"} placeholder={"Name"} />
              <AdminInput label={"Enter surname"} placeholder={"Surname"} />
            </Wrapper.Flex>
            <AdminInput label={"Position"} placeholder={"Enter position"} />
          </Wrapper.WrapTable>
        </Wrapper.InputTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default AddTeam;
