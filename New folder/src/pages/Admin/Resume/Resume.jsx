import { Wrapper } from "./styles";
import { column } from "./header";
import Table from "../../../components/Reusable/CustomTable";
import AdminSearch from "../../../components/AminSearch";
import RegularButton from "../../../components/Reusable/RegularButton";
import request from "../../../services";
import { useResumeContext } from "../../../context/ResumeContext";
import { useEffect, useState } from "react";
import loadingIcon from "../../../assets/icons/loading.svg";
import Pagination from "../../../components/Reusable/Pagination";
import useSearch from "../../../services/Search";
import { useLocation } from "react-router-dom";

const Resume = () => {
  const [{ resumedata, searchData}, dispatch] = useResumeContext();
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const query = useSearch();
  const { search } = useLocation();
  

  const getResume = async () => {
    try {
      const res = await request.get(`admin/resume${search || ''}`);
      setPagination(res?.data?.pagination)
      dispatch({
        type: "setResume",
        payload: res?.data?.data,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };
console.log(pagination, "nfvjfdhvfrejn");
  
  const handleSearch = async (e)  => {
    try {
      const res = await request.get(`admin/resume/search?fullName=${e.target.value}`);
      dispatch({
        type: "setSearch",
        payload: res?.data?.data,
      });
        setLoading(false);
      } catch (error) {
        console.error("Error", error);
        setLoading(false);
      }
    }
    
    useEffect(() => {
      getResume();
    }, [search]);
    return (
      <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Resumes</Wrapper.Header>
        <Wrapper.Nav>
          <AdminSearch placeholder={"Search"} on onChange={handleSearch}/>
          <RegularButton
            title="Vacancy request"
            btnwidth={"141px"}
            btnheight={"42px"}
          />
          <RegularButton
            title="Vacancy applies"
            btnwidth={"141px"}
            btnheight={"42px"}
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
            <Table column={column} rowData={searchData.length > 0 ? searchData : resumedata} />
          )}
        </Wrapper.WrapTable>
        <Pagination
          current={Number(query.get("page")) || 0}
          SizeAll={pagination?.totalPages || 1}
        />
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default Resume;
