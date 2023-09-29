import { Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";
const Header = () => {
  return (
    <Wrapper.Flex>
      <Wrapper.Box>{/* <TrashIcon /> */}</Wrapper.Box>
      <Wrapper.Box>{/* <PenIcon /> */}</Wrapper.Box>
    </Wrapper.Flex>
  );
};

export const column = [
  {
    headerName: "Cover",
    flex: 0.5,
  },

  {
    headerName: "Project name",
    flex: 1.5,
  },

  {
    headerName: "Project type",
    flex: 1,
  },
  {
    headerName: "Link",
    // cellRenderer: RendererStatus,
    flex: 0.5,
  },
  {
    headerName: "Status",
    flex: 0.6,
  },
  {
    headerName: "Action",
    flex: 0.5,
  },
];
