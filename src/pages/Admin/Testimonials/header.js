import { Wrapper } from "./styles";
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
    flex: 0.5,
  },

  {
    headerName: "Company name",
    flex: 0.5,
  },

  {
    headerName: "Content",
    flex: 0.5,
  },
  {
    headerName: "Added date",
    flex: 0.5,
  },
  {
    headerName: "Status",
    flex: 0.5,
  },
  {
    headerName: "Action",
    flex: 0.2,
  },
];
