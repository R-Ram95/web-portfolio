import Pill from "../../components/pill";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../../components/card/Card";
import { experienceData, ExperienceType } from "./Experience.data";
import { FaArrowRight } from "react-icons/fa6";

interface ExperienceCardProps {
  experience: ExperienceType;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <Card className="group">
      <div className=" text-slate-400 text-nowrap text-sm">
        {experience.year}
      </div>
      <div className="ml-0 md:ml-6">
        <CardTitle className="group-hover:text-emerald-300">
          {experience.position}
        </CardTitle>
        <CardDescription className="mt-2">
          {experience.description}
        </CardDescription>
        <CardFooter className="mt-4 flex flex-wrap flex-row gap-2">
          {experience.skills.map((skill) => (
            <Pill>{skill}</Pill>
          ))}
        </CardFooter>
      </div>
    </Card>
  );
};

const Experience = () => {
  return (
    <div>
      {experienceData.map((exp) => (
        <div className="mb-4">
          <ExperienceCard experience={exp} />
        </div>
      ))}
      <a
        className="flex flex-row items-center gap-2 hover:gap-4 text-slate-200 hover:text-emerald-300 text-md mt-4 cursor-pointer"
        href="/rohinesh-ram-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Full Resume <FaArrowRight />
      </a>
    </div>
  );
};

export default Experience;
