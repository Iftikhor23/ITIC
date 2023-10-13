import { Container, Wrapper } from "./styles";
import { useState } from 'react'; 

function AdminInput({ label, placeholder, prefix, onChange,value, suffix, type}) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (newValue) => {
    setInputValue(newValue);
    onChange(newValue); 
  };

  return (
    <Container>
      <Wrapper.Label >{label}</Wrapper.Label>
      <Wrapper>
        <Container.Prefix>{prefix}</Container.Prefix>
        <Wrapper.Input
          placeholder={placeholder}
          value={value} 
          onChange={handleInputChange} 
          type={type}
      
        />
        <Container.Suffix>{suffix}</Container.Suffix>
      </Wrapper>
    </Container>
  );
}

export default AdminInput;
