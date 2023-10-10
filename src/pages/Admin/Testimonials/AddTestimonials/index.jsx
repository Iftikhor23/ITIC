import { Wrapper } from "./styles";
import AdminInput from "../../../../components/Reusable/AdminInput";
import Button from "../../../../components/Reusable/ButtonComb/Button";
import RegularButton from "../../../../components/Reusable/RegularButton";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../../../../components/Reusable/ImageUpload";

function AddTestimonials() {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/admin/testimonials");
  };

  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Title>Add Testimonial</Wrapper.Title>
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
          <ImageUpload inputheight="110px" inputwidth="110px" br="1000px" />

          <Wrapper.WrapTable>
            <Wrapper.Flex>
              <AdminInput label={"Name"} placeholder={"Enter Name"} />
              <AdminInput label={"Surname"} placeholder={"Enter Surname"} />
            </Wrapper.Flex>
            <Wrapper.Flex>
              <AdminInput label={"Company Name"} placeholder={"Company Name"} />
              <AdminInput label={"Content"} placeholder={"Enter Content"} />
            </Wrapper.Flex>
          </Wrapper.WrapTable>
        </Wrapper.InputTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default AddTestimonials;
