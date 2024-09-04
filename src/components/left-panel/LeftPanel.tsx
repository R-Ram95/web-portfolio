import TimeLine from "../timeline";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const LeftPanel = () => {
  const labels = [
    "About Me",
    "Experience",
    "Projects",
    "Writing",
    "Education X Certifications",
  ];

  const links = [
    {
      icon: <FaLinkedin size={30} />,
      link: "https://www.linkedin.com/in/rohinesh",
    },
    { icon: <FaGithub size={30} />, link: "https://github.com/R-Ram95" },
    { icon: <FaSquareXTwitter size={30} />, link: "https://x.com/RohRam224" },
  ];

  const onClick = (label: string) => {
    const sectionId = label.toLowerCase().replace(/ /g, "-");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24 text-slate-200">
      <div className="flex flex-col">
        <h1 className="text-4xl font-sem-bold tracking-wide">ROHINESH RAM</h1>
        <h2 className="text-xl mt-4">
          Software Engineer X Mechanical Engineer
        </h2>
        <div className="mt-20 hidden lg:flex">
          <TimeLine labels={labels} onClick={onClick} />
        </div>
      </div>
      <ul className="flex flex-row gap-8 mt-3">
        {links.map((link) => (
          <li className="hover" key={`${link.link}`}>
            <a href={link.link} target="_blank">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default LeftPanel;
