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
    headerName: "Vacancy title",
    flex: 0.5,
  },

  {
    headerName: "Position level",
    flex: 0.5,
  },

  {
    headerName: "Location",
    flex: 0.5,
  },
  {
    headerName: "Employment type",
    flex: 0.5,
  },
  {
    headerName: "Time",
    flex: 0.5,
  },
  {
    headerName: "Salary",
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
