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
    headerName: "Phone Number",
    flex: 0.5,
  },
  {
    headerName: "Submit date",
    flex: 0.5,
  },
  {
    headerName: "Email address",
    flex: 0.5,
  },
  {
    headerName: "Comment",
    flex: 0.5,
  },
];
