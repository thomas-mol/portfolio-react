import "./HomePage.css";
import introImage from "../assets/mol_thomas1.png";
import Button from "../components/atoms/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <>
      <div className="image-container">
        <img src={introImage} alt="intro-image" />
      </div>
      <div className="intro">
        <div className="">
          <h3>Thomas Mol</h3>
          <h4>
            Full-Stack Developer <em>(in training)</em>
          </h4>
        </div>
        <p>
          Passionate IT student. <br /> Committed to learning and personal
          growth.
        </p>
        <div className="btn-container">
          <Button type="primary">
            Email Me <em> </em>
            <FontAwesomeIcon icon={faEnvelope} />
          </Button>
          <Button type="secondary">
            Download CV <em> </em>
            <FontAwesomeIcon icon={faFileArrowDown} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
