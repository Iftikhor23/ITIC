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
  const Data = [
    {
      id: 1,
      image: person1,
      pName: "Ariana Grande",
      job: "Head Recruiter",
    },
    {
      id: 2,
      image: person2,
      pName: "Kendrick Lamar",
      job: "Head Recruiter",
    },
    {
      id: 3,
      image: person3,
      pName: "Dave Chappelle",
      job: "Product Manager",
    },
    {
      id: 4,
      image: person4,
      pName: "Nicki Minaj",
      job: "Human Recources",
    },
    {
      id: 5,
      image: person5,
      pName: "Marshall Mathers",
      job: "Project Manager",
    },
    {
      id: 6,
      image: person6,
      pName: "Missie Elliot",
      job: "Web Developer",
    },
    {
      id: 7,
      image: person7,
      pName: "Kevin Hart",
      job: "Web Designer",
    },
  ];
  
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
          {teamData.map((items,id) => {
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
