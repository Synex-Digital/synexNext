import { Reacttilt } from "@/app/components";
import Image from "next/image";

const ServiceCard = ({ items }) => {
  return (
    <div >
      <Reacttilt>
        <div
          className="h-96 col-span-1 rounded-xl relative overflow-hidden bg-[#c0dbe2]"
        >
          <div className="">
            <div className="wave h-56 w-[6400px] absolute bottom-0 bg-waveAnimation bg-repeat-x fill-orange-300"></div>
            <div className="wave h-52 w-[6400px] absolute bottom-0 bg-waveAnimationBack bg-repeat-x opacity-40"></div>
          </div>
        </div>
      </Reacttilt>
    </div>
  );
};

export default ServiceCard;
