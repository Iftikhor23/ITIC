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
    headerName: "Name and Surname",
    flex: 3,
  },

  {
    headerName: "Position",
    flex: 1.5,
  },

  {
    headerName: "Added date",
    flex: 1.5,
  },
  {
    headerName: "Status",
    flex: 0.7,
  },
  {
    headerName: "Action",
    flex: 0.7,
  },
];
