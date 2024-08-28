import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../../components/card/Card";

const ExperienceCard = () => {
  return (
    <Card>
      <div className=" text-slate-400 text-nowrap text-sm">2022-2024</div>
      <div className="ml-0 md:ml-6">
        <CardTitle className="hover:text-emerald-300">
          ACCOLITE DIGITAL
        </CardTitle>
        <CardDescription className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quos
          iste reiciendis maxime voluptate quod pariatur accusantium est
          obcaecati, culpa, eligendi quo consequuntur harum animi facilis rerum.
          Quis, nostrum laborum!
        </CardDescription>
        <CardFooter className="mt-4">hi hello</CardFooter>
      </div>
    </Card>
  );
};

const Experience = () => {
  return (
    <div>
      <Card>
        <div className=" text-slate-400 text-nowrap text-sm">2022-2024</div>
        <div className="ml-0 md:ml-6">
          <CardTitle className="hover:text-emerald-300">
            ACCOLITE DIGITAL
          </CardTitle>
          <CardDescription className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quos
            iste reiciendis maxime voluptate quod pariatur accusantium est
            obcaecati, culpa, eligendi quo consequuntur harum animi facilis
            rerum. Quis, nostrum laborum!
          </CardDescription>
          <CardFooter className="mt-4">hi hello</CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default Experience;
