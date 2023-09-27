import { Data } from "./SidebarData";
import { Container } from "./styles";
import logOut from "../../assets/icons/log-out.svg";

function AdminSidebar() {
  return (
    <Container>
      <Container.SideWrap>
        {Data.map((item, index) => {
          return (
            <Container.List key={index}>
              {item.icon}
              <Container.Title>{item.title}</Container.Title>
            </Container.List>
          );
        })}
      </Container.SideWrap>
      <Container.LogOut>
        <img src={logOut} alt="log out icon" />
        <p>Log Out</p>
      </Container.LogOut>
    </Container>
  );
}

export default AdminSidebar;
