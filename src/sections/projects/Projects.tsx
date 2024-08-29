import { FaArrowRight } from "react-icons/fa6";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../../components/card";
import Pill from "../../components/pill";
import { projectData, ProjectType } from "./Project.data";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card
      className="group cursor-pointer flex flex-row"
      onClick={() => window.open(project.link, "_blank")}
    >
      <div className="w-1/3 flex-shrink-0">
        <img
          className="object-cover w-full h-24 md:h-24 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
          src={project.thumbnailLink}
        />
      </div>
      <div className="pl-4 md:pl-6">
        <CardTitle className="group-hover:text-emerald-300">
          {project.title}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
        {project.technologies.length > 0 && (
          <CardFooter className="mt-4 flex flex-wrap flex-row gap-2">
            {project.technologies.map((technology) => (
              <Pill key={technology}>{technology}</Pill>
            ))}
          </CardFooter>
        )}
      </div>
    </Card>
  );
};

const Projects = () => {
  return (
    <div>
      {projectData.map((project) => (
        <div className="mb-4" key={project.link}>
          <ProjectCard project={project} />
        </div>
      ))}
      <a
        className="flex flex-row items-center gap-2 hover:gap-4 text-slate-200 hover:text-emerald-300 text-md mt-4 cursor-pointer"
        href="https://github.com/R-Ram95"
        target="_blank"
      >
        View more of my projects <FaArrowRight />
      </a>
    </div>
  );
};

export default Projects;
