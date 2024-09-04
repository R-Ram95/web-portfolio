import Projects from "../../sections/projects";
import AboutMe from "../../sections/about-me";
import Experience from "../../sections/experience";
import UnderConstruction from "../under-construction/UnderConstruction";
import Education from "../../sections/education";

const RightPanel = () => {
  return (
    <main className="py-24">
      <section className="scroll-mt-24" id="about-me">
        <AboutMe />
      </section>
      <section className="mt-40 scroll-mt-24" id="experience">
        <Experience />
      </section>
      <section className="mt-40 scroll-mt-24" id="projects">
        <Projects />
      </section>
      <section className="mt-40 scroll-mt-24" id="writing">
        <UnderConstruction title="Writing" />
      </section>
      <section className="mt-40 scroll-mt-24" id="education-x-certifications">
        <Education />
      </section>
    </main>
  );
};

export default RightPanel;
