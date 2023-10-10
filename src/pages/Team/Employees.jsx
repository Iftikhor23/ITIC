import person1 from "../../assets/images/worker1.svg";
import person2 from "../../assets/images/worker2.svg";
import person3 from "../../assets/images/worker3.svg";
import person4 from "../../assets/images/worker4.svg";
import person5 from "../../assets/images/worker5.svg";
import person6 from "../../assets/images/worker6.svg";
import person7 from "../../assets/images/worker7.svg";
import { Container } from "./styles";
import { HeadingOne, Paragraph } from "../../styled/styles";

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

function Employees() {
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
          {Data.map(({ id, image, pName, job }) => {
            return (
              <div key={id}>
                <div className="personBox">
                  <img src={image} alt="employee" />
                  <Container.Name>{pName}</Container.Name>
                  <Container.Job>{job}</Container.Job>
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
