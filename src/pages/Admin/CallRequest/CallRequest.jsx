import { Wrapper } from "./styles";
import { column } from "./header";
import Table from "../../../components/Reusable/CustomTable";
import AdminSearch from "../../../components/AminSearch";
import request from "../../../services";
import { useEffect, useState } from "react";
import loadingIcon from "../../../assets/icons/loading.svg";


const CallReq = () => {
  const [callData, setCallData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCallReq = async () => {
    try {
      const res = await request.get(`admin/call-request/all`);
      setCallData(res?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(() => {
    getCallReq();
  }, []);

  const searchHandle = async (e) => {
    const searchValue = e.target.value;
    try {
      const res = await request.get(
        `admin/employee/search?name=${searchValue}`
      );
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Call Requests</Wrapper.Header>
        <Wrapper.Nav>
          <AdminSearch
            onChange={(e) => searchHandle(e)}
            placeholder={"Search by title"}
          />
        </Wrapper.Nav>
        <Wrapper.WrapTable>
          {loading ? (
            <Wrapper.Loading>
              <Wrapper.Box>
                <img src={loadingIcon} />
              </Wrapper.Box>
            </Wrapper.Loading>
          ) : (
            <Table column={column} rowData={callData} />
          )}
        </Wrapper.WrapTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default CallReq;
