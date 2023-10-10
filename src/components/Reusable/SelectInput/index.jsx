import { Container } from "./styles";
import arrow from "../../../assets/icons/angle-down.svg";
import { useState } from "react";

function SelectInput({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Senior", "Middle", "Junior"];
  return (
    <Container>
      <Container.Header>Position Level</Container.Header>
      <Container.Wrapper>
        <Container.Btn onClick={() => setIsActive(!isActive)}>
          {selected} <img src={arrow} alt="arrow icon" />
        </Container.Btn>
        {isActive && (
          <Container.Items>
            {options.map((option) => (
              <Container.Item
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}
              >
                {option}
              </Container.Item>
            ))}
          </Container.Items>
        )}
      </Container.Wrapper>
    </Container>
  );
}

export default SelectInput;
