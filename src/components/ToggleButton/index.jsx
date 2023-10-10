import { Wrapper, Wrap } from "./styles";
import { useState } from "react";

function Toggle() {
  const [active, setActive] = useState("active");

  const Button = (props) => {
    return (
      <>
        <Wrap active={props.active} onClick={props.onClick}>
          <Wrap.Title active={props.active}>{props.title}</Wrap.Title>
        </Wrap>
      </>
    );
  };

  return (
    <Wrapper>
      <Wrapper.Header>Employment type</Wrapper.Header>
      <Wrapper.Wrap>
        <Button
          title="Online"
          active={active === "active" ? 1 : 0}
          onClick={() => setActive("active")}
        />
        <Button
          title="Offline"
          active={active === "inactive" ? 1 : 0}
          onClick={() => setActive("inactive")}
        />
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default Toggle;
