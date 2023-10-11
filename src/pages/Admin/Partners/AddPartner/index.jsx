import React, { useState } from "react";
import { Container } from "./styles";
import RegularButton from "../../../../components/Reusable/RegularButton";
import Button from "../../../../components/Reusable/ButtonComb/Button";
import request from "../../../../services";
import Toast from "../../../../components/Reusable/Toast";
import Switch from "../../../../components/Reusable/Switch";
import { usePartnersContext } from "../../../../context/PartnersContext";
import ImageUpload from "../../../../components/Reusable/ImageUpload";
import Swal from "sweetalert2";

function AddPartner({ isVisible, onClose }) {
  const [{ selected }, dispatch] = usePartnersContext();
  const [urlFormData, setUrlFormData] = useState();
  const [idOfAttachmentId, setIdOfAttachmentId] = useState("");
  const [state, setState] = useState({
    blogPhotoUrl: selected?.partnerPhotoUrl || null,
    attachmentId: selected?.attachmentId || "",
    isActive: selected?.isActive || false,
  });
  

  if (!isVisible) return null;
  const handleCLose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const handleInputChange = async (e) => {
    const files = e.target.files[0];
    try {
      const formData = new FormData();
      formData.append("file", files);

      const resData = await request.post("file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileUrl, id,  } = resData.data.data;

      if (resData) {
        console.log("Rasm yuklandi!");
      }

      e.target.value = null;
      setUrlFormData(fileUrl);
      setIdOfAttachmentId(id);
    } catch (error) {
      console.error("Yuklashda xatolik yuz berdi:", error);
    }
  };

  const saveImage = async () => {
    if(true){
      try {
        const res = await request.post(
          "admin/partner",
          {
            data: {
              partnerPhotoUrl: urlFormData,
              attachmentId: idOfAttachmentId,
              isActive: state?.isActive,
            },
          },
          Toast({
            type: "success",
            message: "Saved",
          })
        );
        onClose();
      } catch (error) {
        console.error("Saqlashda xatolik yuz berdi:", error);
      } 
    }else{
      Swal.fire("malumotni toldiring")
    }
      
  };
  return (
    <Container onClick={handleCLose} id="container">
      <Container.Wrapper>
        <div className="flex">
          <Container.Title>Upload a logo image</Container.Title>
          <div className="buttonWrap">
            <RegularButton title="Cancel" />
            <Container.Flex>
              <Switch
                onClick={(v) => setState({ ...state, isActive: v })}
                checked={state?.isActive ? 1 : 0}
              />{" "}
              Active
            </Container.Flex>
            <Button
              title="Add partner"
              btnheight="42px"
              btnwidth="122px"
              fontSize="14px"
              aHeight="42px"
              aWidth="42px"
              iconSize="24px"
              onClick={saveImage}
            />
          </div>
        </div>
        <input type="file" onChange={handleInputChange} />
      </Container.Wrapper>
    </Container>
  );
}

export default AddPartner;
