import { Wrapper, Wrap } from "./styles";

function Toggle({ active, onClick }) {
  return (
    <Wrapper>
      <Wrapper.Header>Employment type</Wrapper.Header>
      <Wrapper.Wrap>
        <Wrap
          active={active === "online"} // "online" bo'lsa true, aks holda false
          onClick={() => onClick("online")} // "online" ni serverga jonatish
        >
          <Wrap.Title active={active === "online"}>Online</Wrap.Title>
        </Wrap>
        <Wrap
          active={active === "offline"} // "offline" bo'lsa true, aks holda false
          onClick={() => onClick("offline")} // "offline" ni serverga jonatish
        >
          <Wrap.Title active={active === "offline"}>Offline</Wrap.Title>
        </Wrap>
      </Wrapper.Wrap>
    </Wrapper>
  );
}


export default Toggle;
