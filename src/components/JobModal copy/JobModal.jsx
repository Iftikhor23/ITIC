import React from "react";
import { Container } from "./styles";
import closeIcon from "../../assets/icons/close.svg";
import Input from "../InputComponent/Input";
import Button from "../Reusable/ButtonComb/Button";
import request from "../../services";
import { useState } from "react";
import Toast from "../Reusable/Toast";
import Swal from "sweetalert2";

function JobModal({ isVisible, onClose }) {
  const [getData, setGetData] = useState({
    fullName: "",
    linkedinLink: "",
    phoneNumber: "+998",
    email: "",
    position: "",
    comment: "",
    userCVUrl: "",
    attachmentId: "",
  });
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "container" || e.target.id === "wrapper") onClose();
  };

  const  uploadCV = async (e) => {
    const file = e.target.files[0];
    try {
      const formData = new FormData();
      formData.append("file", file);

      const resData = await request.post("file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(resData, "dvnjsfnvjhv hsbvjbdshbvhasfvhb");

      const { fileUrl, id } = resData?.data?.data;
      setGetData({ ...getData, userCVUrl: fileUrl, attachmentId: id });
      Toast({
        type: "success",
        message: "Rasm yuklandi",
      });
      e.target.value = null;
    } catch (error) {
      console.error("Yuklashda xatolik yuz berdi:", error);
    }
  };
  const saveData = async () => {
    if (getData?.fullName && getData?.phoneNumber && getData?.email) {
      try {
        const res = await request.post(`public/resume`, {
          data: {
            fullName: getData.fullName,
            linkedinLink: getData.linkedinLink,
            phoneNumber: `+998${getData.phoneNumber}`,
            email: getData.email,
            position: getData.position,
            comment: getData.comment,
            userCVUrl: getData.userCVUrl,
            attachmentId: getData.attachmentId,
          },
        });
        Toast({
          type: "success",
          message: "Saved",
        });
        onClose();
        setGetData({
          fullName: "",
          linkedinLink: "",
          phoneNumber: "+998",
          email: "",
          position: "",
          comment: "",
          userCVUrl: "",
          attachmentId: "",
        });
      } catch (error) {
        Swal.fire("There is a problem with the Internet or with the server");
        console.error("Saqlashda xatolik yuz berdi:", error);
      }
    } else {
      Swal.fire("Fill in all the data fields");
    }
  };
  console.log(getData)
  return (
    <Container onClick={handleClose} id="container">
      <Container.Wrapper>
        <Container.Header>
          <Container.Text>Apply on position</Container.Text>
          <img
            src={closeIcon}
            style={{ cursor: "pointer" }}
            onClick={() => onClose()}
            alt="close icon"
          />
        </Container.Header>
        <Container.Form>
          <Container.Group>
            <Input
              label={"Full Name"}
              placeholder={"Enter Full Name"}
              type={"text"}
              onChange={(e) =>
                setGetData({ ...getData, fullName: e.target.value })
              }
            />
             <Input
              label={"Phone Number"}
              placeholder={"Enter Phone Number"}
              type={"number"}
              prefix={"+998"}
              onKeyPress={(event) => {
                if (event.target.value.length === 7) {
                  event.preventDefault();
                }
              }}
              onChange={(event) => {
                if (event.target.value.length <= 7) {
                  setGetData({ ...getData, phoneNumber: event.target.value });
                }
              }}
            />
          </Container.Group>
          <Container.Group>
            <Input
              label={"LinkedIn Profile Link"}
              placeholder={"Enter LinkedIn Profile Link"}
              type={"text"}
              onChange={(e) =>
                setGetData({ ...getData, linkedinLink: e.target.value })
              }
            />
            <Input
              label={"Email Address"}
              placeholder={"Enter Email Address"}
              type={"email"}
              onChange={(e) =>
                setGetData({ ...getData, email: e.target.value })
              }
            />
          </Container.Group>
          <Container.Group>
            <Input
              label={"Job Position"}
              placeholder={"Enter Position"}
              onChange={(e) =>
                setGetData({ ...getData, position: e.target.value })
              }
            />
            <div className="fileInput">
              <Input
                style={{ opacity: 0 }}
                label={"Attach Your Resume/CV"}
                placeholder={"Upload from files"}
                type={"file"}
                onChange={uploadCV}
              />
            </div>
          </Container.Group>

          <Input
            label={"Comment"}
            placeholder={"Add Comment"}
            type={"text"}
            width={"652px"}
            onChange={(e) =>
              setGetData({ ...getData, comment: e.target.value })
            }
          />
          <Button
            title="Submit"
            fontSize="24px"
            iconSize="24px"
            onClick={saveData}
          />
        </Container.Form>
      </Container.Wrapper>
    </Container>
  );
}

export default JobModal;
