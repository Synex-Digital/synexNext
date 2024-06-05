import { Heading } from "@/app/components";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import aboutimg from "/public/assets/about group.webp";
import Link from "next/link";

const OurDevelopers = () => {
  const developersList = [
    {
      id: 1,
      name: "Ali Imran Mehedi",
      title: "Founder & CEO",
      dp: "/public/assets/about group.webp",
      linkedin: "https://www.linkedin.com/in/aliimranmehedi",
      github: "https://github.com",
    },
    {
      id: 2,
      name: "Ali Imran Mehedi",
      title: "Founder & CEO",
      dp: "/public/assets/about group.webp", //there is some image issue
      linkedin: "https://www.linkedin.com/in/aliimranmehedi",
      github: "https://github.com",
    },
    {
      id: 3,
      name: "Ali Imran Mehedi",
      title: "Founder & CEO",
      dp: "/public/assets/about group.webp",
      linkedin: "https://www.linkedin.com/in/aliimranmehedi",
      github: "https://github.com",
    },
    {
      id: 4,
      name: "Ali Imran Mehedi",
      title: "Founder & CEO",
      dp: "/public/assets/about group.webp",
      linkedin: "https://www.linkedin.com/in/aliimranmehedi",
      github: "https://github.com",
    },
    {
      id: 5,
      name: "Ali Imran Mehedi",
      title: "Founder & CEO",
      dp: "/public/assets/about group.webp",
      linkedin: "https://www.linkedin.com/in/aliimranmehedi",
      github: "https://github.com",
    },
    {
      id: 6,
      name: "Ali Imran Mehedi",
      title: "Founder & CEO",
      dp: "/public/assets/about group.webp",
      linkedin: "https://www.linkedin.com/in/aliimranmehedi",
      github: "https://github.com",
    },
  ];

  return (
    <>
      <section>
        <div className="container mx-auto px-2">
          <Heading
            title={"Our Developers"}
            subtitle={"Meet the dedicated minds behind Synex Digital"}
          />
          <div className="flex flex-wrap justify-center gap-6 sm:gap-7 mt-20">
            {developersList?.map(({id, name, dp, linkedin, github}) => (
              <div key={id} className="group w-[42%] sm:w-[23%] pt-8 pb-6 text-center text-white rounded-xl cursor-pointer duration-500 hover:shadow-devHover hover:bg-slate-600 hover:text-[#c2e812] hover:border-0">
                <Image
                  className="w-20 sm:w-36 h-20 sm:h-36 mx-auto rounded-[50%] object-cover duration-1000 group-hover:rounded-md sm:group-hover:rounded-xl group-hover:border-0 group-hover:scale-170"
                  alt="Developer picture"
                  src={aboutimg}
                  width={500}
                  height={500}
                />
                <div className="font-medium text-xl mt-1.5 duration-200">
                  {name}
                </div>
                <p className="duration-200 text-sm">Founder & CEO</p>
                <div className="flex justify-center gap-x-5 text-xl mt-3.5">
                  <Link
                    href={`${linkedin}`}
                    target="_blank"
                    className="duration-200 hover:text-blue-800"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    href={`${github}`}
                    target="_blank"
                    className="duration-200 hover:text-[#171515]"
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurDevelopers;
