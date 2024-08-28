import Pill from "../../components/pill";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../../components/card/Card";
import { experienceData, ExperienceType } from "./Experience.data";

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
    </div>
  );
};

export default Experience;
