import {FiArrowRight} from "react-icons/fi";
import { useState } from "react";
import "./Job.css";
import JobModal from "../JobModal/JobModal";

const Data = [
  {
    id: 1,
    title: "Frontend Developer",
    level: "Junior/Middle",
    location: "Tashkent/Uzbekistan",
    workHours: "Full Time 9:00-18:00",
    salary: "Negotiable",
    uploadedDate: "June 6",
  },
  {
    id: 2,
    title: "Backend Developer",
    level: "Junior/Middle",
    location: "Tashkent/Uzbekistan",
    workHours: "Full Time 9:00-18:00",
    salary: "Negotiable",
    uploadedDate: "June 6",
  },
  {
    id: 3,
    title: "Flutter Developer",
    level: "Junior/Middle",
    location: "Tashkent/Uzbekistan",
    workHours: "Full Time 9:00-18:00",
    salary: "negotiable",
    uploadedDate: "June 6",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    level: "Junior/Middle",
    location: "Tashkent/Uzbekistan",
    workHours: "Full Time 9:00-18:00",
    salary: "negotiable",
    uploadedDate: "June 6",
  },
];

function Job() {

  const[showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      {Data.map(
        ({ id, title, level, location, workHours, salary, uploadedDate }) => {
          return (
            <div key={id} className="jobBox">
              <div className="upperPart">
                <div className="jobTitle">
                  <h3>{title}</h3>
                  <p>{level}</p>
                </div>
                <div className="description">
                  <p>{location}</p>
                  <p>{workHours}</p>
                  <p>Salary: {salary}</p>
                </div>
              </div>
              <div className="bottomPart">
                <p>{uploadedDate}</p>
                <div className="arrow" onClick={() => setShowModal(true)}>
                  <FiArrowRight size={"25px"} />
                </div>
              </div>
            </div>
          );
        }
      )}
      <JobModal isVisible={showModal} onClose={() => setShowModal(false)}/>
    </div>
  );
}

export default Job;
