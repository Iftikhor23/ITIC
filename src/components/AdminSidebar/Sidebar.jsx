import { Data } from "./SidebarData";
import { Container } from "./styles";

function AdminSidebar() {
  return (
    <Container>
      {Data.map((item, index) => {
        return (
          <Container.List key={index}>
           {item.icon}
            <Container.Title>{item.title}</Container.Title>
          </Container.List>
        );
      })}
    </Container>
  );
}

export default AdminSidebar;
