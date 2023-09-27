import { useNavigate } from "react-router-dom";
import { Data } from "./SidebarData";
import { Container } from "./styles";
import { useEffect, useState } from "react";

function AdminSidebar() {
  const navigate = useNavigate()
  const [url, setUrl] = useState('');
	useEffect(() => setUrl(window.location.pathname), [window.location.pathname]);

  return (
    <Container>
     {Data?.map(
				({ title, icon, path, hidden, disable }, i) =>
					!hidden && (
						<Container.Flex
							className="FlexBox"
							onClick={() => !disable && navigate(path)}
							active={url === path ? 1 : 0}
							key={i}
							disable={disable ? 1 : 0}
						>
							{icon} <Container.Title>{title}</Container.Title>
						</Container.Flex>
					),
			)}
    </Container>
  );
}

export default AdminSidebar;
