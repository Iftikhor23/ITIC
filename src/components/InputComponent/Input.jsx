import { useState } from "react";
import { Container } from "./styles";

function Input({
  label,
  placeholder,
  value,
  placeholderColor,
  type,
  width,
  prefix,
  onChange,
}) {


  const [inputFields, setInputFields] = useState({
    fName: "",
    lName: "",
    phoneNum: null,
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Container.Label>{label}</Container.Label>
      <Container.Wrap width={width}>
        <Container.Prefix>{prefix}</Container.Prefix>
        <Container.Input
          type={type}
          placeholder={placeholder}
          placeholderColor={placeholderColor}
        />
      </Container.Wrap>
    </Container>
  );
}

export default Input;
