import { Wrapper } from "./styles";
import { column } from './header';
import Table from "../../../components/Reusable/CustomTable";
import Button from "../../../components/Reusable/ButtonComb/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import request from "../../../services";
import { useVacanciesContext } from "../../../context/VacanciesContext";

const  Vacancies = () => {
  const navigate = useNavigate();
  const [{vacanciesdata},dispatch] = useVacanciesContext();
  const getPartners = async () => {
    try {
      const res = await request.get(`admin/vacancy/all`);
      dispatch({
        type: "setVacancies",
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(()=>{
    getPartners()
  },[])

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
            onClick={() => navigate("/admin/vacancies/add")}
          />
        </Wrapper.Nav>
        <Wrapper.WrapTable>
          <Table column={column} rowData={vacanciesdata} />
        </Wrapper.WrapTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default Vacancies;

