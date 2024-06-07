import { Reacttilt } from "@/app/components";
import Image from "next/image";

const ServiceCard = ({ key, items }) => {
  return (
    <div key={key}>
      <Reacttilt>
        <div
          className="h-96 col-span-1 rounded-xl relative overflow-hidden bg-[#c0dbe2]"
        >
          <div className="">
            <div className="wave"></div>
            <div className="wave" style={{ animationDelay: "500ms" }}></div>
          </div>
        </div>
      </Reacttilt>
    </div>
  );
};

export default ServiceCard;
