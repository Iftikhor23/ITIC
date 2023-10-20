import { useState } from "react";
import { Container } from "./styles";

function Input({
  label,
  placeholder,
  value,
  placeholderColor,
  type,
  width,
  height,
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
      <Container.Wrap width={width} height={height}>
        <Container.Prefix>{prefix}</Container.Prefix>
        <Container.Input
          type={type}
          placeholder={placeholder}
          placeholderColor={placeholderColor}
          value={value}
        />
      </Container.Wrap>
    </Container>
  );
}

export default Input;
