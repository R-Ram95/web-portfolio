import { FaHammer } from "react-icons/fa"; // Importing a hammer icon from react-icons

const UnderConstruction = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col border  justify-center rounded-lg p-6">
      <div className="mb-4">
        <FaHammer size={50} className="text-yellow-500" />
      </div>
      <h2 className="text-2xl text-slate-200 font-bold mb-2">{title}</h2>
      <p className="text-lg text-slate-200">
        This section is under construction. Please check back later!
      </p>
    </div>
  );
};

export default UnderConstruction;
