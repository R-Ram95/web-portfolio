import AboutMe from "../../sections/about-me";
import Experience from "../../sections/experience";
import UnderConstruction from "../under-construction/UnderConstruction";

const RightPanel = () => {
  return (
    <div className="lg:top-0 lg:max-h-screen lg:py-24 overflow-y-scroll">
      <div id="about-me">
        <AboutMe />
      </div>
      <div className="mt-48" id="experience">
        <Experience />
      </div>
      <div className="mt-48" id="projects">
        <UnderConstruction title="Projects" />
      </div>
      <div className="mt-48" id="writing">
        <UnderConstruction title="Writing" />
      </div>
      <div className="mt-48" id="education-x-certifications">
        <UnderConstruction title="Education" />
      </div>
    </div>
  );
};

export default RightPanel;
