import AboutMe from "../../sections/about-me";
import Experience from "../../sections/experience";

const RightPanel = () => {
  return (
    <div className="lg:top-0 lg:max-h-screen lg:py-24 overflow-scroll">
      <div id="about-me">
        <AboutMe />
      </div>
      <div className="mt-48" id="experience">
        <Experience />
      </div>
      <div id="projects">
        <h1>Projects</h1>
      </div>
      <div id="writing">
        <h1>Writing</h1>
      </div>
      <div id="education-x-certifications">
        <h1>Education</h1>
      </div>
    </div>
  );
};

export default RightPanel;
