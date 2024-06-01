import { Breadcrumbs, Collaborate, SimpleHook } from "@/app/components";
import { OurDevelopers, ContactUs } from "../../components";
import Image from "next/image";
import aboutimg from "/public/assets/about group.webp";

export default function AboutWrapper() {
  return (
    <main>
      <Breadcrumbs title={"About"} stateoff={false} />
      <section className="pb-20">
        <div className="container mx-auto px-2 flex justify-between">
          <div className="w-[48%] text-white">
            <h1 className="text-xl lg:text-4xl md:text-3xl font-semibold lg:font-bold ">
              Going further than just a cowering space,Synex Digital offers
              more.
            </h1>
            <p className="text-sm lg:text-lg lg:font-medium mt-7">
              Driven by our passion for software agency, we are committed to
              transforming this enthusiasm into a thriving online platform.
              Whether you're seeking cutting-edge software development,
              innovative IT solutions, or expert consultancy, Synex Digital is
              your trusted partner every step of the way. Join us on our journey
              as we continue to set new standards in the software agency
              industry. Experience excellence with Synex Digital - where
              innovation meets reliability.
            </p>
          </div>
          <div className="w-[48%]">
            <Image className="rounded-xl" alt="About picture" src={aboutimg} />
          </div>
        </div>
      </section>
      
      <OurDevelopers />

      <section className="bg-[#1d2934] py-20 mt-20">
        <div className="container mx-auto px-2">
          <div className="flex max-sm:flex-col max-sm:gap-y-5 justify-between mt-7 ">
            <div className=" text-primary  md:font-semibold font-medium text-center sm:w-[32%]">
              <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                <SimpleHook endtime={5} />
                <span>+</span>{" "}
              </div>
              <p className="md:text-xl text-lg">YEARS OF EXPERIENCE</p>
            </div>
            <div className=" text-primary  md:font-semibold font-medium  text-center  sm:w-[32%]">
              <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                <SimpleHook endtime={89} />
                <span>+</span>{" "}
              </div>
              <p className="md:text-xl text-lg uppercase">Project Complete</p>
            </div>
            <div className=" text-primary md:font-semibold font-medium  text-center sm:w-[32%]">
              <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                <SimpleHook endtime={22} />
                <span>+</span>{" "}
              </div>
              <p className="md:text-xl text-lg max-sm:leading-6">
                DESIGNERS AND DEVELOPERS
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactUs />
      <Collaborate />
    </main>
  );
}
