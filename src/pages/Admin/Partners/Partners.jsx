import { Wrapper } from "./styles";
import Table from "../../../components/Reusable/CustomTable";
import Button from "../../../components/Reusable/ButtonComb/Button";
import { useEffect, useState } from "react";
import AddPartner from "./AddPartner/index";
import { column } from "./header";
import { useLocation } from "react-router-dom";
import request from "../../../services";
import { usePartnersContext } from "../../../context/PartnersContext";

const Partners = () => {
  const { search } = useLocation();
  const [{ partnersdata }, dispatch] = usePartnersContext();
  const [showModal, setShowModal] = useState(false);

  
  const getPartners = async () => {
    try {
      const res = await request.get(`admin/partner/all`);
      dispatch({
        type: "setPartner",
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getPartners();
  }, []);

  console.log(partnersdata);

  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Header>Partners</Wrapper.Header>
        <Wrapper.Nav>
          <Button
            onClick={() => setShowModal(true)}
            btnheight="42px"
            btnwidth="107px"
            title="Add Member"
            fontSize="14px"
            aHeight="42px"
            aWidth="42px"
            iconSize="24px"
          />
        </Wrapper.Nav>
        <Wrapper.WrapTable>
          <Table column={column} rowData={partnersdata} />
        </Wrapper.WrapTable>
      </Wrapper.Wrap>
      <AddPartner isVisible={showModal} onClose={() => setShowModal(false)} />
    </Wrapper>
  );
};

export default Partners;
