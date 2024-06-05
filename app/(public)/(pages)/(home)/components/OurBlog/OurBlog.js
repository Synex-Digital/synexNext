import { AosAnimation, Heading } from "@/app/components";
import Image from "next/image";
import blogimg from "/public/assets/blogimg.webp";
import Link from "next/link";
import { CustomButton } from "@/app/core";


const OurBlog = () => {
  return (
    <>
      <section className="py-20">
          <div className="container mx-auto px-2">
            <Heading title={"Our Blog"} subtitle={"Latest Blog and Articles"} />
            <div className="lg:flex justify-between">
              <AosAnimation aosvalue={"zoom-in-up"} className="lg:w-[49.5%] ">
                <div
                  className=" p-3 pb-5 rounded-xl  cursor-pointer bg-[#4cc39430] h-full"
                  id="hover_img"
                >
                  <figure>
                    <Image
                      src={blogimg}
                      alt="Reacording Image"
                      priority
                      placeholder="blur"
                      quality={80}
                      className=" rounded-xl"
                    />
                  </figure>

                  <div className="text-white">
                    <p className="bg-primary px-3 py-1 rounded-full text-sm inline-block mt-5 text-black">
                      Development
                    </p>
                    <time className="block text-sm my-3 text-gray-400">
                      15 Nov 2023
                    </time>
                    <h3 className="font-medium text-xl mb-1">
                      Optimizing Laravel for Search Engines: Advanced SEO
                      Strategies and Best Practices
                    </h3>
                    <p className="font-light mt-3 max-md:hidden">
                      Explore advanced SEO strategies tailored for Laravel
                      development to enhance website visibility and ranking.
                      Discover techniques in URL structuring, metadata
                      optimization, content management, and performance
                      optimization for superior search engine results.
                    </p>
                  </div>
                </div>
              </AosAnimation>
              <div className="lg:w-[49.5%] flex flex-wrap gap-y-4 justify-between max-lg:mt-5">
                <AosAnimation aosvalue={"zoom-in-up"} className="sm:w-[49%]">
                  <div
                    className=" p-3 pb-5 rounded-xl cursor-pointer  bg-[#4cc39430] h-fit"
                    id="hover_img"
                  >
                    <figure>
                      <Image
                        src={blogimg}
                        alt="Reacording Image"
                        priority
                        placeholder="blur"
                        quality={80}
                        className=" rounded-xl"
                      />
                    </figure>
                    <div className="text-white">
                      <time className="block my-3 text-sm text-gray-400">
                        15 Nov 2023
                      </time>
                      <div className="font-medium ">
                        Optimizing Laravel for Search Engines: Advanced SEO
                        Strategies and Best Practices
                      </div>
                    </div>
                  </div>
                </AosAnimation>
                <AosAnimation aosvalue={"zoom-in-up"} className="sm:w-[49%]">
                  <div
                    className=" p-3 pb-5 cursor-pointer rounded-xl  bg-[#4cc39430] h-fit"
                    id="hover_img"
                  >
                    <figure>
                      <Image
                        src={blogimg}
                        alt="Reacording Image"
                        priority
                        placeholder="blur"
                        quality={80}
                        className=" rounded-xl"
                      />
                    </figure>
                    <div className="text-white">
                      <time className="block my-3 text-sm text-gray-400">
                        15 Nov 2023
                      </time>
                      <div className="font-medium ">
                        Optimizing Laravel for Search Engines: Advanced SEO
                        Strategies and Best Practices
                      </div>
                    </div>
                  </div>
                </AosAnimation>
                <AosAnimation aosvalue={"zoom-in-up"} className="sm:w-[49%]">
                  <div
                    className=" p-3 pb-5 rounded-xl cursor-pointer  bg-[#4cc39430] h-fit"
                    id="hover_img"
                  >
                    <figure>
                      <Image
                        src={blogimg}
                        alt="Reacording Image"
                        priority
                        placeholder="blur"
                        quality={80}
                        className=" rounded-xl"
                      />
                    </figure>
                    <div className="text-white">
                      <time className="block my-3 text-sm text-gray-400">
                        15 Nov 2023
                      </time>
                      <div className="font-medium ">
                        Optimizing Laravel for Search Engines: Advanced SEO
                        Strategies and Best Practices
                      </div>
                    </div>
                  </div>
                </AosAnimation>
                <AosAnimation aosvalue={"zoom-in-up"} className="sm:w-[49%]">
                  <div
                    className=" p-3 pb-5 rounded-xl cursor-pointer  bg-[#4cc39430] h-fit"
                    id="hover_img"
                  >
                    <figure>
                      <Image
                        src={blogimg}
                        alt="Reacording Image"
                        priority
                        placeholder="blur"
                        quality={80}
                        className=" rounded-xl"
                      />
                    </figure>
                    <div className="text-white">
                      <time className="block my-3 text-sm text-gray-400">
                        15 Nov 2023
                      </time>
                      <div className="font-medium ">
                        Optimizing Laravel for Search Engines: Advanced SEO
                        Strategies and Best Practices
                      </div>
                    </div>
                  </div>
                </AosAnimation>
              </div>
            </div>
            <div className=" w-full text-center mt-16">
              <CustomButton btnTitle="View More" href="/blog" />
            </div>
          </div>
        </section>

    </>
  );
};

export default OurBlog;
