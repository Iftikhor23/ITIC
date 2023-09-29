import { Wrapper } from "./styles";
import { column } from './header';
import Table from "../../../components/Reusable/CustomTable";
import AdminSearch from "../../../components/AminSearch";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Reusable/ButtonComb/Button";

const  Cases = () => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/admin/case/add");
  }

  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Case Studies</Wrapper.Header>
        <Wrapper.Nav>
          <AdminSearch/>
          <Button
            btnheight="42px"
            btnwidth="107px"
            title="Add Case"
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

export default Cases;
