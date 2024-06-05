import { Heading, ReactSlick, Reacttilt } from "@/app/components";
import getAllServices from "@/lio/getAllServices";
import Image from "next/image";
import Link from "next/link";

const OurServices = async () => {
  const data_services = await getAllServices();

  return (
    <>
      <section>
        <div className="container mx-auto px-2">
          <Heading
            title="Our Services"
            subtitle="Elevating Your Business with Innovative Services"
          />

          {/* older cards */}
          {/* <div className="flex justify-between flex-wrap ">
            <ReactSlick className="w-full h-full ">
              {data_services.services.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer !w-[95%] !mx-auto !block py-5"
                >
                  <Reacttilt>
                    <Link href={`/services/${item.slugs}`}>
                      <div className=" rounded-xl xl:p-7 lg:p-6 md:p-5 p-4 bg-[#c0dbe2]">
                        <h2 className="text-center text-3xl font-semibold">
                          {item.title}
                        </h2>
                        <h3 className="text-justify mt-5 font-medium">
                          {item.description}
                        </h3>
                        <Image
                          width={250}
                          height={250}
                          alt="Web Image"
                          quality={80}
                          src={`https://sd-admin-backend.synexdigital.com/uploads/service/${item.thumbnail}`}
                          className="mx-auto p-5"
                        />
                      </div>
                    </Link>
                  </Reacttilt>
                </div>
              ))}
            </ReactSlick>
          </div> */}

          {/* new design of cards */}
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-1 h-96 rounded-xl bg-white"></div>
            <div className="col-span-1 h-96 rounded-xl bg-white"></div>
            <div className="col-span-1 h-96 rounded-xl bg-white"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
