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
  max,
  onKeyPress,
  resHeight,
  conHeight,
}) {
  const handleKeyPress = (event) => {
    if (typeof onKeyPress === "function") {
      onKeyPress(event);
    }
    if (type === "number" && event.target.value.length === 9) {
      event.preventDefault();
    }
  };
  

  return (
    <Container conHeight={conHeight}>
      <Container.Label>{label}</Container.Label>
      <Container.Wrap width={width} height={height} resHeight={resHeight}>
        <Container.Prefix>{prefix}</Container.Prefix>
        <Container.Input
          type={type}
          placeholder={placeholder}
          placeholderColor={placeholderColor}
          value={value} 
          onChange={onChange}
          max={max}
          onKeyPress={handleKeyPress} 
        />
      </Container.Wrap>
    </Container>
  );
}

export default Input;