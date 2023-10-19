import { Wrapper } from "./styles";
import { column } from "./header";
import Table from "../../../components/Reusable/CustomTable";
import Button from "../../../components/Reusable/ButtonComb/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import request from "../../../services";
import { useVacanciesContext } from "../../../context/VacanciesContext";
import AdminSearch from "../../../components/AminSearch";
import loadingIcon from "../../../assets/icons/loading.svg";


const Vacancies = () => {
  const navigate = useNavigate();
  const [{ search, vacanciesdata }, dispatch] = useVacanciesContext();
  const [loading, setLoading] = useState(true);

  const getPartners = async () => {
    try {
      const res = await request.get(`admin/vacancy/all`);
      dispatch({
        type: "setVacancies",
        payload: res?.data?.data,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getPartners();
  }, []);
  const searchHandle = async (e) => {
    const searchValue = e.target.value;
    try {
      const res = await request.get(`admin/vacancy/search?name=${searchValue}`);
      dispatch({
        type: "setSearch",
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Vacancies</Wrapper.Header>
        <Wrapper.Nav>
          <AdminSearch
            onChange={(e) => searchHandle(e)}
            placeholder={"Search by title"}
          />
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
          {loading ? (
            <Wrapper.Loading>
              <Wrapper.LoadingBox>
                <img src={loadingIcon} />
              </Wrapper.LoadingBox>
            </Wrapper.Loading>
          ) : (
            <Table column={column} rowData={vacanciesdata} />
          )}
        </Wrapper.WrapTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default Vacancies;
