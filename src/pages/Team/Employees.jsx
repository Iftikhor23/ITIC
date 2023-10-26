import { useEffect, useState } from "react";
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
    <Container id="our-team">
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
