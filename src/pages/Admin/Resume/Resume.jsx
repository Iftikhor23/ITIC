import { Wrapper } from "./styles";
import { column } from "./header";
import Table from "../../../components/Reusable/CustomTable";
import AdminSearch from "../../../components/AminSearch";
import RegularButton from "../../../components/Reusable/RegularButton";
import request from "../../../services";
import { useResumeContext } from "../../../context/ResumeContext";
import { useEffect, useState } from "react";
import loadingIcon from "../../../assets/icons/loading.svg";

const Resume = () => {
  const [{ resumedata, search}, dispatch] = useResumeContext();
  const [loading, setLoading] = useState(true);

  const getResume = async () => {
    try {
      const res = await request.get(`admin/resume/all`);
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
  useEffect(() => {
    getResume();
  }, []);

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
            <Table column={column} rowData={search.length > 0 ? search : resumedata} />
          )}
        </Wrapper.WrapTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default Resume;
