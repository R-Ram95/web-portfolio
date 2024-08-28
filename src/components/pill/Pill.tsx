import { Props } from "./Pill.model";

const Pill = ({ children }: Props) => {
  return (
    <div className="bg-emerald-500/10 text-emerald-300 text-xs py-1 px-2 rounded-full inline-block">
      {children}
    </div>
  );
};

export default Pill;
