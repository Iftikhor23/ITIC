import { Wrapper } from "./styles";
import { column } from './header';
import Table from "../../../components/Reusable/CustomTable";
import Button from "../../../components/Reusable/ButtonComb/Button";
import { useNavigate } from "react-router-dom";

const  Vacancies = () => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/admin/vacancies/add");
  };
  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Vacancies</Wrapper.Header>
        <Wrapper.Nav>
          <Button
            btnheight="42px"
            btnwidth="107px"
            title="Add Vacancy"
            fontSize="14px"
            aHeight="42px"
            aWidth="42px"
            iconSize="24px"
            onClick={handleNav}
          />
        </Wrapper.Nav>
        <Wrapper.WrapTable>
          <Table column={column} />
        </Wrapper.WrapTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default Vacancies;

