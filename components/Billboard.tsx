import { Billboard as BillboardInterface } from "@/types";

interface BillboardProps {
  data: BillboardInterface;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 overflow-hidden sm:p-6 lg:p-8 rounded-xl">
      <div
        className="relative rounded-xl aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full text-center gap-y-8">
          <div className="flex items-center justify-center max-w-xs text-xl font-bold text-white sm:text-5xl lg:text-6xl sm:max-w-3xl px-24 py-10 bg-black shadow-[1px_1px_5px_white] bg-opacity-60 rounded-3xl select-none">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
