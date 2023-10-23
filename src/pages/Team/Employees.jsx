import { useEffect, useState } from "react";
import person1 from "../../assets/images/worker1.png";
import person2 from "../../assets/images/worker2.png";
import person3 from "../../assets/images/worker3.png";
import person4 from "../../assets/images/worker4.png";
import person5 from "../../assets/images/worker5.png";
import person6 from "../../assets/images/worker6.png";
import person7 from "../../assets/images/worker7.png";
import request from "../../services";
import { Container } from "./styles";
import { HeadingOne, Paragraph } from "../../styled/styles";


const  Employees =  () =>  {
  const [teamData, setTeamData] = useState([])
const [loading, setLoading] = useState(true);
 
  
  const getCallReq = async () => {
    try {
      setLoading(true);
      const res = await request.get(`public/employee`);
      setTeamData(res?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getCallReq();
  }, []);
  return (
    <Container>
      <Container.Wrapper>
        <div className="text">
          <HeadingOne>
            Join and be part of
            <br /> IT Investments Center
          </HeadingOne>
          <Paragraph>
            Become a member of a freelancer's pool and work on creative projects
          </Paragraph>
        </div>
        <Container.Images>
          {teamData.slice(0,7)?.map((items,id) => {
            return (
              <div key={id}>
                <div className="personBox">
                  <img className="image-teams" src={items?.employeePhotoUrl} alt="employee" />
                  <Container.Name>{items?.lastName}</Container.Name>
                  <Container.Job>{items?.firstName}</Container.Job>
                </div>
              </div>
            );
          })}
        </Container.Images>
      </Container.Wrapper>
    </Container>
  );
}

export default Employees;
