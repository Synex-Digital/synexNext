import { CustomButton } from "@/app/core";
import recordimg from "/public/assets/banner.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <section className="pb-10">
        <div className="container mx-auto px-2 lg:py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6 flex justify-center flex-col">

              <h1 className=" text-white font-bold max-lg:text-center capitalize">
                <span className="text-2xl leading-[20px]">Business IT Solutions</span>
                <br />{" "}
                <span className="text-5xl text-primary leading-[70px]">Pioneering Excellence</span>
                <br />
                <span className="text-3xl leading-[50px]">for Your Technological Needs</span>
              </h1>

              <p className="text-white text-sm mt-2 mb-12 max-md:font-light max-lg:text-center">
                Welcome to Synex Digital, your corporate IT partner. As a
                Digital Solutions Expert, we are excited to help you through our
                extensive variety of services to elevate your business in the
                ever-changing digital landscape. Synex Digital's commercial IT
                solutions reflect our dedication to excellence. We are your
                one-stop technological solution supplier, meeting your
                business's particular demands with precision and competence.
              </p>
              <div className="max-lg:text-center">
                <CustomButton btnTitle="Explore Our Service" href="/projects"/>
                {/* <Link
                  href="project"
                  className="bg-primary hover:bg-[#bcdd2d] py-2 px-7 rounded-full text-lg font-medium"
                >
                  Explore Our Service
                </Link> */}
              </div>
            </div>
            <div className="col-span-6 max-lg:mt-7 max-lg:mb-7 flex justify-center items-start">
              <Image
                src={recordimg}
                alt="Reacording Image"
                priority
                placeholder="blur"
                quality={80}
                className="rounded-xl select-none object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
