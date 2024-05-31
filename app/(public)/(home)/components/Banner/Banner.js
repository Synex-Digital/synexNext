import recordimg from "/public/assets/thumbBody.jpg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <section className="pt-10 pb-16">
        <div className="container lg:flex mx-auto px-2 lg:py-16 justify-between max-lg:flex max-lg:flex-col-reverse">
          <div className="lg:w-[48%]">
            <h1 className="xl:text-5xl lg:text-4xl text-3xl text-white font-bold max-lg:text-center leading-snug">
              Business IT Solutions:
              <br />{" "}
              <span className="text-primary">Pioneering Excellence for</span>
              <br />
              Your Technological Needs
            </h1>
            <h2 className="text-white mt-5 mb-8 max-md:font-light max-lg:text-center">
              Welcome to Synex Digital, your corporate IT partner. As a Digital
              Solutions Expert, we are excited to help you through our extensive
              variety of services to elevate your business in the ever-changing
              digital landscape. Synex Digital's commercial IT solutions reflect
              our dedication to excellence. We are your one-stop technological
              solution supplier, meeting your business's particular demands with
              precision and competence.
            </h2>
            <div className="max-lg:text-center">
              <Link
                href="project"
                className="bg-primary hover:bg-[#bcdd2d] py-2 px-7 rounded-full text-lg font-medium"
              >
                Explore Our Service
              </Link>
            </div>
          </div>
          <div className="lg:w-[48%] max-lg:mt-7 max-lg:mb-7 flex justify-center">
            <Image
              src={recordimg}
              alt="Reacording Image"
              priority
              placeholder="blur"
              quality={80}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
