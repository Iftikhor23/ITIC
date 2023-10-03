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
    headerName: "Logo",
    flex: 3,
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
