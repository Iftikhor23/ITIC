import { Wrapper } from "./styles";
import { column } from './header';
import Table from "../../../components/Reusable/CustomTable";
import AdminSearch from "../../../components/AminSearch";

const  CallReq = () => {

  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Call Requests</Wrapper.Header>
        <Wrapper.Nav>
          <AdminSearch/>
        </Wrapper.Nav>
        <Wrapper.WrapTable>
          <Table column={column} />
        </Wrapper.WrapTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default CallReq;
