import { Wrapper } from "./styles";
import { column } from './header';
import Table from "../../../components/Reusable/CustomTable";
import Button from "../../../components/Reusable/ButtonComb/Button";
import { useState } from "react";
import AddPartner from "./AddPartner/index";

const  Partners = () => {
  const[showModal, setShowModal] = useState(false);
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
          <Table column={column} />
        </Wrapper.WrapTable>
      </Wrapper.Wrap>
      <AddPartner isVisible={showModal} onClose={() => setShowModal(false)}/>
    </Wrapper>
  );
}

export default Partners;
