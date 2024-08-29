import { Card, CardSubTitle, CardTitle } from "../../components/card";
import { GiGraduateCap } from "react-icons/gi";
import {
  educationAndCertsData,
  EducationAndCertsType,
} from "./EducationAndCerts.data";
import { FaAward } from "react-icons/fa6";

interface EducationAndCertsCardProps {
  educationAndCert: EducationAndCertsType;
}

const EducationAndCertsCard = ({
  educationAndCert,
}: EducationAndCertsCardProps) => {
  return (
    <Card
      className="group flex-wrap md:flex-nowrap cursor-pointer"
      onClick={() => {
        window.open(educationAndCert.link, "_blank");
      }}
    >
      <div className="flex flex-row">
        {educationAndCert.cert ? (
          <FaAward className="fill-slate-400" />
        ) : (
          <GiGraduateCap className="fill-slate-400" />
        )}
        <span className=" pl-2 text-slate-400 text-nowrap text-sm">
          {educationAndCert.year}
        </span>
      </div>
      <div className="ml-0 md:ml-6">
        <CardTitle className="group-hover:text-emerald-300">
          {educationAndCert.title}
        </CardTitle>
        {educationAndCert?.subTitle && (
          <CardSubTitle>{educationAndCert.subTitle}</CardSubTitle>
        )}
      </div>
    </Card>
  );
};

const EducationAndCerts = () => {
  return (
    <div>
      {educationAndCertsData.map((educationAndCert) => (
        <div className="mb-4" key={educationAndCert.title}>
          <EducationAndCertsCard educationAndCert={educationAndCert} />
        </div>
      ))}
    </div>
  );
};

export default EducationAndCerts;
