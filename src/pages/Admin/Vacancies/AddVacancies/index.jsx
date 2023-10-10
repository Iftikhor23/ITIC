import { Wrapper } from "./styles";
import AdminInput from "../../../../components/Reusable/AdminInput";
import Button from "../../../../components/Reusable/ButtonComb/Button";
import RegularButton from "../../../../components/Reusable/RegularButton";
import { useNavigate } from "react-router-dom";
import SelectInput from "../../../../components/Reusable/SelectInput";
import { useState } from "react";
import Toggle from "../../../../components/ToggleButton";
import TimeSelect from "../../../../components/TimeSelect";

function AddTeam() {
  const [selected, setSelected] = useState("Choose Level");
  const [active, setActive] = useState("active");

  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/admin/vacancies");
  };

  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Title>Add Vacancy</Wrapper.Title>
        <Wrapper.Nav>
          <div onClick={handleNav}>
            <RegularButton title={"Cancel"} />
          </div>
          <Button
            btnheight="42px"
            btnwidth="135px"
            title="Save changes"
            fontSize="14px"
            aHeight="42px"
            aWidth="42px"
            iconSize="24px"
          />
        </Wrapper.Nav>
        <Wrapper.InputTable>
          <Wrapper.WrapTable>
            <Wrapper.Flex>
              <AdminInput
                label={"Vacancy title"}
                placeholder={"Vacancy title"}
              />
              <SelectInput selected={selected} setSelected={setSelected} />
            </Wrapper.Flex>
            <Wrapper.Flex>
              <SelectInput selected={selected} setSelected={setSelected} />
              <Toggle />
            </Wrapper.Flex>
            <Wrapper.Flex>
              <TimeSelect/>

              <AdminInput
                prefix={"UZS |"}
                label={"Salary"}
                placeholder={"Enter Salary"}
              />
            </Wrapper.Flex>
          </Wrapper.WrapTable>
        </Wrapper.InputTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default AddTeam;
