import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import "./Job.css";
import JobModal from "../JobModal/JobModal";
import { useEffect } from "react";
import request from "../../services";

function Job() {
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [testomonial, setTestomonial] = useState([])
  const [loading, setLoading] = useState(true);

  const getCallReq = async () => {
    try {
      setLoading(true);
      const res = await request.get(`public/vacancy`);
      setTestomonial(res?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getCallReq();
  }, []);
  // console.log(testomonial, 'bu vacancy  ');

  return (
    <div className="container">
      {testomonial.slice(0,4)?.map(
        (items, index) => {
          return (
            <div key={index} className="jobBox">
              <div className="upperPart">
                <div className="jobTitle">
                  <h3>{items?.title
                  }</h3>
                  <p>{items?.positionLevel}</p>
                </div>
                <div className="description">
                  <p>{items?.location}</p>
                  <p>{items?.employmentType}</p>
                  <p>Salary: {items?.salary}</p>
                </div>
              </div>
              <div className="bottomPart">
                <p>{`from: ${items?.fromTime}, to: ${items?.toTime}`}</p>
                <div className="arrow"  onClick={() => {
                  setSelectedJobTitle(items?.title);
                  setShowModal(true)}}>
                  <FiArrowRight size={"25px"} />
                </div>
              </div>
            </div>
          );
        }
      )}
      <JobModal isVisible={showModal} onClose={() => setShowModal(false)}   selectedJobTitle={selectedJobTitle}/>
    </div>
  );
}

export default Job;
