import TimeLine from "../timeline";

const LeftPanel = () => {
  const labels = [
    "About Me",
    "Experience",
    "Projects",
    "Writing",
    "Education X Certifications",
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
        <h1 className="text-4xl">ROHINESH RAM</h1>
        <h2 className="text-xl mt-4">
          Software Engineer X Mechanical Engineer
        </h2>
        <div className="mt-20 hidden md:flex">
          <TimeLine labels={labels} onClick={onClick} />
        </div>
      </div>
    </header>
  );
};

export default LeftPanel;
