import { Wrapper } from "./styles";
import { column } from './header';
import Table from "../../../components/Reusable/CustomTable";
import AdminSearch from "../../../components/AminSearch";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Reusable/ButtonComb/Button";
import request from "../../../services";
import { useEffect } from "react";
import { useCaseContext } from "../../../context/CaseContext";

const  Cases = () => {
  const navigate = useNavigate();
  const [{casedata,search},dispatch] = useCaseContext()

  const getPartners = async () => {
    try {
      const res = await request.get(`admin/case/get/all/info`);
      dispatch({
        type: "setCase",
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getPartners();
  }, []);
  const searchHandle = async (e) => {
    const searchValue = e.target.value;
    try {
      const res = await request.get(`admin/case/search?projectName=${searchValue}`);
      dispatch({
        type: "setSearch",
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error", error);
    }
  }
  
  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Case Studies</Wrapper.Header>
        <Wrapper.Nav>
        <AdminSearch onChange={(e) => searchHandle(e)}  placeholder={'Search by title'} />
          <Button
            btnheight="42px"
            btnwidth="107px"
            title="Add Case"
            fontSize="14px"
            aHeight="42px"
            aWidth="42px"
            iconSize="24px"
            onClick={() => navigate("/admin/case/add")}
          />
        </Wrapper.Nav>
        <Wrapper.WrapTable>
          <Table column={column} rowData={search.length > 0 ? search : casedata} />
        </Wrapper.WrapTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default Cases;
