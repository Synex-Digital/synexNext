import { Heading, TiltAnimation } from "@/app/components";
import Image from "next/image";
import recordimg from "/public/assets/thumbBody.jpg";
import Link from "next/link";
import { CustomButton } from "@/app/core";

const OurProjects = () => {
  return (
    <>
      <section className="pt-14">
        <div className="container mx-auto px-2">
          <Heading
            title="Our Projects"
            subtitle="Crafting Tailored Business IT Solutions"
          />

          <div className="text-center">
            <div className="flex justify-between flex-wrap gap-y-5">
              <TiltAnimation
                color={"#00d7ff"}
                bgcolor={
                  "linear-gradient(80deg, rgba(3,91,125,1) 0%, rgba(0,133,80,1) 100%)"
                }
              >
                <div className="p-1 absolute z-20">
                  <Image
                    src={recordimg}
                    alt="Recording Image"
                    priority
                    placeholder="blur"
                    quality={80}
                    className="rounded-xl object-cover"
                  />
                  <div className="p-3 pt-8 text-center">
                    <time className="bg-[#007d58] text-white font-light text-sm py-2 px-5 rounded-3xl">
                      28 sep 2023
                    </time>
                    <div className="text-white text-xl font-semibold text-center mt-5 mb-3">
                      Nugor Tech - Company portfolio
                    </div>
                    <p className="text-white text-center">
                      company in bangladesh since 2019 in Bangladesh by synex
                      Digital. A Service provider company portfolio
                    </p>
                  </div>
                </div>
              </TiltAnimation>
              <TiltAnimation
                color={"#00d7ff"}
                bgcolor={
                  "linear-gradient(80deg, rgba(3,91,125,1) 0%, rgba(0,133,80,1) 100%)"
                }
              >
                <div className="p-1 absolute z-20 ">
                  <Image
                    src={recordimg}
                    alt="Reacording Image"
                    priority
                    placeholder="blur"
                    quality={80}
                    className="rounded-xl object-cover"
                  />
                  <div className="p-3 pt-8 text-center">
                    <time className="bg-[#007d58] text-white font-light text-sm py-2 px-5 rounded-3xl">
                      28 sep 2023
                    </time>
                    <div className="text-white text-xl font-semibold text-center mt-5 mb-3">
                      Nugor Tech - Company portfolio
                    </div>
                    <p className="text-white text-center">
                      company in bangladesh since 2019 in Bangladesh by synex
                      Digital. A Service provider company portfolio
                    </p>
                  </div>
                </div>
              </TiltAnimation>
              <TiltAnimation
                color={"#00d7ff"}
                bgcolor={
                  "linear-gradient(80deg, rgba(3,91,125,1) 0%, rgba(0,133,80,1) 100%)"
                }
              >
                <div className="p-1 absolute z-20 ">
                  <Image
                    src={recordimg}
                    alt="Reacording Image"
                    priority
                    placeholder="blur"
                    quality={80}
                    className="rounded-xl object-cover "
                  />
                  <div className="p-3 pt-8 text-center">
                    <time className="bg-[#007d58] py-2 text-white font-light text-sm px-5 rounded-3xl">
                      28 sep 2023
                    </time>
                    <div className="text-white text-xl font-semibold text-center mt-5 mb-3">
                      Nugor Tech - Company portfolio
                    </div>
                    <p className="text-white text-center">
                      company in bangladesh since 2019 in Bangladesh by synex
                      Digital. A Service provider company portfolio
                    </p>
                  </div>
                </div>
              </TiltAnimation>
              <TiltAnimation
                color={"#00d7ff"}
                bgcolor={
                  "linear-gradient(80deg, rgba(3,91,125,1) 0%, rgba(0,133,80,1) 100%)"
                }
              >
                <div className="p-1 absolute z-20 ">
                  <Image
                    src={recordimg}
                    alt="Reacording Image"
                    priority
                    placeholder="blur"
                    quality={80}
                    className="rounded-xl object-cover"
                  />
                  <div className="p-3 pt-8 text-center">
                    <time className="bg-[#007d58] text-white font-light text-sm py-2 px-5 rounded-3xl">
                      28 sep 2023
                    </time>
                    <div className="text-white text-xl font-semibold text-center mt-5 mb-3">
                      Nugor Tech - Company portfolio
                    </div>
                    <p className="text-white text-center">
                      company in bangladesh since 2019 in Bangladesh by synex
                      Digital. A Service provider company portfolio
                    </p>
                  </div>
                </div>
              </TiltAnimation>
            </div>
            <div className=" w-full text-center mt-16">
              <CustomButton btnTitle="View More" href="#"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProjects;
