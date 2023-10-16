import { Wrapper } from "./styles";
import { column } from './header';
import Table from "../../../components/Reusable/CustomTable";
import AdminSearch from "../../../components/AminSearch";
import RegularButton from '../../../components/Reusable/RegularButton'
import request from "../../../services";
import { useResumeContext } from "../../../context/ResumeContext";
import { useEffect } from "react";

const  Resume = () => {
  const [{ resumedata }, dispatch] = useResumeContext();


  const getResume = async () => {
    try {
      const res = await request.get(`admin/resume/all`);
      dispatch({
        type: "setResume",
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };
  console.log(resumedata);

  useEffect(() => {
    getResume();
  }, []);
  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Resumes</Wrapper.Header>
        <Wrapper.Nav>
          <AdminSearch placeholder={"Search"}/>
          <RegularButton title="Vacancy request" btnwidth={"141px"} btnheight={"42px"}/>
          <RegularButton title="Vacancy applies" btnwidth={"141px"} btnheight={"42px"}/>
        </Wrapper.Nav>
        <Wrapper.WrapTable>
          <Table column={column} rowData={resumedata} />
        </Wrapper.WrapTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default Resume;
