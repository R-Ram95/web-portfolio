import Pill from "../../components/pill";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../../components/card/Card";

const ExperienceCard = () => {
  return (
    <Card className="group">
      <div className=" text-slate-400 text-nowrap text-sm">2022-2024</div>
      <div className="ml-0 md:ml-6">
        <CardTitle className="group-hover:text-emerald-300">
          FullStack Engineer - ACCOLITE DIGITAL
        </CardTitle>
        <CardDescription className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quos
          iste reiciendis maxime voluptate quod pariatur accusantium est
          obcaecati, culpa, eligendi quo consequuntur harum animi facilis rerum.
          Quis, nostrum laborum!
        </CardDescription>
        <CardFooter className="mt-4 flex flex-wrap flex-row gap-2">
          <Pill>Typescript</Pill>
          <Pill>Typescript</Pill>
          <Pill>Typescript</Pill>
          <Pill>Typescript</Pill>
          <Pill>Typescript</Pill>
        </CardFooter>
      </div>
    </Card>
  );
};

const Experience = () => {
  return (
    <div>
      <ExperienceCard />
    </div>
  );
};

export default Experience;
