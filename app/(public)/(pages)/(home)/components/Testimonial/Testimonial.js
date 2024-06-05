import { Heading, ReactSlick, Reacttilt } from "@/app/components";
import Image from "next/image";
import webicon from "/public/assets/webicon.png";

const Testimonial = () => {
  return (
    <>
      <section className="py-20 ">
        <div className="container mx-auto px-2">
          <Heading
            title={"Testimonial"}
            subtitle={"Genesys Engage: Redefining Customer Contact"}
          />
        </div>
        <div className="container mx-auto px-2 Testimonial py-16">
          <ReactSlick className="w-full h-full !flex !justify-center !items-end">
            <div className="p-5 cursor-grab ">
              <Reacttilt className="w-full h-full flex">
                <div className="rounded-xl p-7 text-black bg-[#adc7a5]">
                  <div className="flex gap-5 items-center">
                    <Image
                      width={40}
                      alt="Web Image"
                      priority
                      placeholder="blur"
                      quality={80}
                      src={webicon}
                    />
                    <div>
                      <p className="font-medium text-lg">ABM Shawon Islam</p>
                    </div>
                  </div>
                  <div className="text-justify mt-5 ">
                    Synex Digital develops dynamic websites with React on the
                    front end and PHP-Laravel on the back end. Strengthen your
                    digital identity with our creative web...
                  </div>
                </div>
              </Reacttilt>
            </div>
            <div className="p-5 cursor-grab">
              <Reacttilt className="w-full h-full flex">
                <div className="rounded-xl p-7 text-black bg-[#e0bb7b]">
                  <div className="flex gap-5 items-center">
                    <Image
                      width={40}
                      alt="Web Image"
                      priority
                      placeholder="blur"
                      quality={80}
                      src={webicon}
                    />
                    <div>
                      <p className="font-medium text-lg">ABM Shawon Islam</p>
                    </div>
                  </div>
                  <div className="text-justify mt-5 ">
                    Synex Digital develops dynamic websites with React on the
                    front end and PHP-Laravel on the back end. Strengthen your
                    digital identity with our creative web...
                  </div>
                </div>
              </Reacttilt>
            </div>
            <div className="p-5 cursor-grab">
              <Reacttilt className="w-full h-full flex">
                <div className="rounded-xl p-7 text-black bg-[#89afb4]">
                  <div className="flex gap-5 items-center">
                    <Image
                      width={40}
                      alt="Web Image"
                      priority
                      placeholder="blur"
                      quality={80}
                      src={webicon}
                    />
                    <div>
                      <p className="font-medium text-lg">ABM Shawon Islam</p>
                    </div>
                  </div>
                  <div className="text-justify mt-5 ">
                    Synex Digital develops dynamic websites with React on the
                    front end and PHP-Laravel on the back end. Strengthen your
                    digital identity with our creative web...
                  </div>
                </div>
              </Reacttilt>
            </div>
            <div className="p-5 cursor-grab ">
              <Reacttilt className="w-full h-full flex">
                <div className="rounded-xl p-7 text-black bg-[#adc7a5]">
                  <div className="flex gap-5 items-center">
                    <Image
                      width={40}
                      alt="Web Image"
                      priority
                      placeholder="blur"
                      quality={80}
                      src={webicon}
                    />
                    <div>
                      <p className="font-medium text-lg">ABM Shawon Islam</p>
                    </div>
                  </div>
                  <div className="text-justify mt-5 ">
                    Synex Digital develops dynamic websites with React on the
                    front end and PHP-Laravel on the back end. Strengthen your
                    digital identity with our creative web...
                  </div>
                </div>
              </Reacttilt>
            </div>
            <div className="p-5 cursor-grab">
              <Reacttilt className="w-full h-full flex">
                <div className="rounded-xl p-7 text-black bg-[#e0bb7b]">
                  <div className="flex gap-5 items-center">
                    <Image
                      width={40}
                      alt="Web Image"
                      priority
                      placeholder="blur"
                      quality={80}
                      src={webicon}
                    />
                    <div>
                      <p className="font-medium text-lg">ABM Shawon Islam</p>
                    </div>
                  </div>
                  <div className="text-justify mt-5 ">
                    Synex Digital develops dynamic websites with React on the
                    front end and PHP-Laravel on the back end. Strengthen your
                    digital identity with our creative web...
                  </div>
                </div>
              </Reacttilt>
            </div>
            <div className="p-5 cursor-grab">
              <Reacttilt className="w-full h-full flex">
                <div className="rounded-xl p-7 text-black bg-[#89afb4]">
                  <div className="flex gap-5 items-center">
                    <Image
                      width={40}
                      alt="Web Image"
                      priority
                      placeholder="blur"
                      quality={80}
                      src={webicon}
                    />
                    <div>
                      <p className="font-medium text-lg">ABM Shawon Islam</p>
                    </div>
                  </div>
                  <div className="text-justify mt-5 ">
                    Synex Digital develops dynamic websites with React on the
                    front end and PHP-Laravel on the back end. Strengthen your
                    digital identity with our creative web...
                  </div>
                </div>
              </Reacttilt>
            </div>
          </ReactSlick>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
