import { AosAnimation, Heading, SimpleHook } from "@/app/components";
import Image from "next/image";

const OurRecords = () => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-2">
          <Heading
            title="Our Records"
            subtitle="Elevating Your Business with Innovative Services"
          />
          <div className="lg:flex justify-between">
            <div className="lg:w-[48%] ">
              <AosAnimation
                aosvalue={"fade-right"}
                className="flex justify-center"
              >
                <Image
                  src={recordimg}
                  alt="Reacording Image"
                  priority
                  placeholder="blur"
                  quality={80}
                  className="rounded-xl"
                />
              </AosAnimation>
            </div>
            <div className="lg:w-[48%] max-lg:mt-7 max-lg:text-center">
              <AosAnimation aosvalue={"fade-up"}>
                <div className="font-semibold max-lg:font-medium text-white lg:mb-5 mb-3 xl:text-4xl lg:text-3xl text-2xl">
                  Navigating the IT Landscape with Precision
                </div>
                <p className="text-white leading-7 max-lg:font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque animi magni dignissimos est molestias, nihil officia
                  nemo consequuntur neque iusto ipsa illo corrupti quam quasi.
                  Aut, eaque voluptatum. Amet similique nihil ducimus eius
                  nobis? Magni architecto corporis praesentium facere? In
                  debitis libero quasi magni? Quam aut, laborum ab expedita
                  pariatur, quos minus nulla autem enim rerum neque sit
                  distinctio. Rerum, voluptatem asperiores maiores ea inventore
                  temporibus fuga, quia magnam corporis nam itaque quas
                  consequuntur, dicta nemo cum numquam ad deleniti nobis eos
                  obcaecati maxime? Sequi aliquid, repudiandae doloribus eos
                  molestias rerum necessitatibus cupiditate enim, rem corrupti
                  dolor quisquam doloremque autem!
                </p>
                <div className="flex max-sm:flex-col max-sm:gap-y-5 justify-between mt-7 ">
                  <div className="border border-primary text-primary px-2 md:py-5 py-3 max-sm:py-5 md:font-semibold font-medium text-center sm:w-[32%] rounded-xl">
                    <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                      <SimpleHook endtime={5} />
                      <span>+</span>{" "}
                    </div>
                    <p className="md:text-xl text-lg">YEARS OF EXPERIENCE</p>
                  </div>
                  <div className="border border-primary text-primary px-2 md:py-5 py-3 md:font-semibold font-medium  text-center max-sm:py-5 sm:w-[32%] rounded-xl">
                    <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                      <SimpleHook endtime={89} />
                      <span>+</span>{" "}
                    </div>
                    <p className="md:text-xl text-lg uppercase">
                      Project Complete
                    </p>
                  </div>
                  <div className="border border-primary text-primary px-2 md:py-5 py-3 md:font-semibold font-medium  text-center max-sm:py-5 sm:w-[32%] rounded-xl">
                    <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                      <SimpleHook endtime={22} />
                      <span>+</span>{" "}
                    </div>
                    <p className="md:text-xl text-lg max-sm:leading-6">
                      DESIGNERS AND DEVELOPERS
                    </p>
                  </div>
                </div>
              </AosAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurRecords;
