import { Wrapper } from "./styles";
import { column } from "./header";
import Table from "../../../components/Reusable/CustomTable";
import Button from "../../../components/Reusable/ButtonComb/Button";
import { useNavigate } from "react-router-dom";
import { useTestomoniralsContext } from "../../../context/TestomoniralsContex";
import request from "../../../services";
import { useEffect, useState } from "react";
import loadingIcon from "../../../assets/icons/loading.svg";

const Testimonials = () => {
  const navigate = useNavigate();
  const [{ testomoniralsdata }, dispatch] = useTestomoniralsContext();
  const [loading, setLoading] = useState(true);

  const getTestomonial = async () => {
    try {
      const res = await request.get(`admin/testomonial/all`);
      dispatch({
        type: "setTestomonirals",
        payload: res?.data?.data,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(() => {
    getTestomonial();
  }, []);

  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Testimonials</Wrapper.Header>
        <Wrapper.Nav>
          <Button
            btnheight="42px"
            btnwidth="153px"
            title="Add Testimonial"
            fontSize="14px"
            aHeight="42px"
            aWidth="42px"
            iconSize="24px"
            onClick={() => navigate("/admin/testimonials/add")}
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
            <Table column={column} rowData={testomoniralsdata} />
          )}
        </Wrapper.WrapTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default Testimonials;
