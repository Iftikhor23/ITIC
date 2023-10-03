import { Wrapper } from "./styles";
import { column } from './header';
import Table from "../../../components/Reusable/CustomTable";
import AdminSearch from "../../../components/AminSearch";
import { useNavigate } from "react-router-dom";
import RegularButton from '../../../components/Reusable/RegularButton'

const  Resume = () => {

  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Resumes</Wrapper.Header>
        <Wrapper.Nav>
          <AdminSearch/>
          <RegularButton title="Vacancy request" btnwidth={"141px"} btnheight={"42px"}/>
          <RegularButton title="Vacancy applies" btnwidth={"141px"} btnheight={"42px"}/>
        </Wrapper.Nav>
        <Wrapper.WrapTable>
          <Table column={column} />
        </Wrapper.WrapTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default Resume;
