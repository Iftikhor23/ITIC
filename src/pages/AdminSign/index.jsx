import { Container } from "./styles";
import AdminInput from "../../components/Reusable/AdminInput";
import logo from "../../assets/images/itLogo.svg";
import ButtonComb from "../../components/Reusable/ButtonComb/Button";
import request from "../../services";
import { useRef, useState, useEffect } from "react";

function AdminSign() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState();

  useEffect(() => {
    useRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  return (
    <Container>
      <Container.Wrapper>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <Container.Header>
          <img src={logo} alt="logo" />
          <p className="headerText">Build Your Future With Us</p>
        </Container.Header>
        <AdminInput
          label={"Email"}
          placeholder={"Enter email"}
          ref={userRef}
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        <AdminInput
          label={"Password"}
          placeholder={"Enter password"}
          ref={userRef}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <ButtonComb
          btnheight="60px"
          btnwidth="200px"
          title="Sign In"
          fontSize="20px"
          aHeight="60px"
          aWidth="60px"
          iconSize="24px"
        />
      </Container.Wrapper>
    </Container>
  );
}

export default AdminSign;
