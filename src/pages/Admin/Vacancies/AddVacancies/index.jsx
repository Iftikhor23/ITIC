import { Wrapper } from "./styles";
import AdminInput from "../../../../components/Reusable/AdminInput";
import Button from "../../../../components/Reusable/ButtonComb/Button";
import RegularButton from "../../../../components/Reusable/RegularButton";
import { useNavigate } from "react-router-dom";
import SelectInput from "../../../../components/Reusable/SelectInput";
import { useState } from "react";
import Toggle from "../../../../components/ToggleButton";
import TimeSelect from "../../../../components/TimeSelect";
import { useVacanciesContext } from "../../../../context/VacanciesContext";
import Toast from "../../../../components/Reusable/Toast";
import request from "../../../../services";
import Swal from "sweetalert2";
import Switch from "../../../../components/Reusable/Switch";

function AddTeam() {
  const [selecteds1, setSelecteds1] = useState("Choose Level ");
  const [selecteds2, setSelecteds2] = useState("Choose Location");
  const [{ selected }, dispatch] = useVacanciesContext();
  const [state, setState] = useState({
    title: selected?.title || "",
    positionLevel: selected?.positionLevel || "",
    location: selected?.location || "",
    employmentType: selected?.employmentType || "",
    salary: selected?.salary || "",
    fromTime: selected?.fromTime || "19:00",
    toTime: selected?.toTime || "10:00",
    isActive: selected?.isActive || false,
  });

  const navigate = useNavigate();
  //! FOR SELECT DATA
  const options = [
    { id: 0, value: "Senior" },
    { id: 1, value: "Middle" },
    { id: 2, value: "Junior" },
  ];
  const regions = [
    { id: 0, value: "Toshkent" },
    { id: 1, value: "Samarqand" },
    { id: 2, value: "Andijon" },
    { id: 3, value: "Farg'ona" },
    { id: 4, value: "Namangan" },
    { id: 5, value: "Sirdaryo" },
    { id: 6, value: "Jizzakh" },
    { id: 7, value: "Xorazm" },
    { id: 8, value: "Navoiy" },
    { id: 9, value: "Qashqadaryo" },
    { id: 10, value: "Surxondaryo" },
    { id: 11, value: "Karakalpakistan" },
  ];
  //! GET SELECT DATA
  const handleTimeChange = (type, value) => {
    setState((prevState) => ({
      ...prevState,
      [type === "start" ? "fromTime" : "toTime"]: value,
    }));
  };
  //! SEND DATA TO SERVER FUNCTION
  const saveDataToServer = async () => {
    if (!selected?.id) {
      if (
        state?.employmentType &&
        state?.toTime &&
        state?.location &&
        state?.positionLevel &&
        state?.title &&
        state?.salary &&
        state?.positionLevel
      ) {
        try {
          const res = await request.post(
            "admin/vacancy",
            {
              data: {
                title: state?.title || "",
                positionLevel: state?.positionLevel || "",
                location: state?.location || "",
                employmentType:state?.employmentType || "",
                salary: state?.salary || "",
                fromTime: state?.fromTime || "19:00",
                toTime: state?.toTime || "10:00",
                isActive: state?.isActive || false,
              },
            },
            Toast({
              type: "success",
              message: "Saved",
            })
          );
          navigate("/admin/vacancies");
        } catch (error) {
          console.error("Saqlashda xatolik yuz berdi:", error);
        }
      } else {
        Swal.fire("Avval to'ldirish maydonchalarini to'ldiring, iltimos!");
      }
    } else {
      if (state?.title && state?.isActive) {
        try {
          const res = await request.put(
            "admin/vacancy",
            {
              data: {
                id: selected?.id,
                title: state?.title || "",
                positionLevel: state?.positionLevel || "",
                location: state?.location || "",
                salary: state?.salary || "",
                fromTime: state?.fromTime || "19:00",
                toTime: state?.toTime || "10:00",
                isActive: state?.isActive || false,
              },
            },
            Toast({
              type: "success",
              message: "Saved",
            })
          );
        } catch (error) {
          console.error("Saqlashda xatolik yuz berdi:", error);
        }
      } else {
        Swal.fire("Avval rasmni kiriting, iltimos!");
      }
    }
  };
  console.log(state);
  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Title>Add Vacancy</Wrapper.Title>
        <Wrapper.Nav>
          <div onClick={() => navigate("/admin/vacancies")}>
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
            onClick={saveDataToServer}
          />
        </Wrapper.Nav>
        <Wrapper.InputTable>
          <Wrapper.WrapTable>
            <Wrapper.Flex>
              <AdminInput
                label={"Vacancy title"}
                placeholder={"Vacancy title"}
                onChange={(e) => {
                  setState({ ...state, title: e.target.value });
                }}
              />

              <SelectInput
                selectedValue={selecteds1}
                setSelected={(selectedValue) => {
                  setSelecteds1(selectedValue);
                  setState((prevState) => ({
                    ...prevState,
                    positionLevel: selectedValue,
                  }));
                }}
                options={options}
              />
            </Wrapper.Flex>
            <Wrapper.Flex>
              <SelectInput
                selectedValue={selecteds2}
                setSelected={(seletedValue) => {
                  setSelecteds2(seletedValue);
                  setState((prevState) => ({
                    ...prevState,
                    location: seletedValue,
                  }));
                }}
                options={regions}
              />
              <Toggle
                active={state.employmentType === "online"} // "employmentType" "online" bo'lsa true, aks holda false
                onClick={(isActive) => {
                  setState({
                    ...state,
                    employmentType: isActive ? "online" : "offline",
                  });
                }}
              />
            </Wrapper.Flex>
            <Wrapper.Flex>
              <TimeSelect
                defaultStartTime={state?.fromTime}
                onTimeChange={handleTimeChange}
              />
              <AdminInput
                prefix={"UZS |"}
                label={"Salary"}
                placeholder={"Enter Salary"}
                onChange={(e) => {
                  setState({ ...state, salary: e.target.value });
                }}
              />
              <Switch
                onClick={(v) => setState({ ...state, isActive: v })}
                checked={state?.isActive ? true : false}
              />{" "}
              Active
            </Wrapper.Flex>
          </Wrapper.WrapTable>
        </Wrapper.InputTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default AddTeam;
