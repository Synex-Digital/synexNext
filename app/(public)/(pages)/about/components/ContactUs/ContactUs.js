import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-2 flex justify-between">
          <div className="w-[48%] ">
            <iframe
              className="rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1096.2305514072784!2d90.36732961145226!3d23.7495884389046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40311a29c1f9eaa9%3A0x7eda334fe00e121c!2sSynex%20Digital!5e0!3m2!1sen!2sbd!4v1711811413537!5m2!1sen!2sbd"
              width="100%"
              height="400"
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-[48%] text-white">
            <h4 className="text-2xl font-medium">GET IN TOUCH WITH US</h4>
            <p className="text-sm mt-5">
              Reach out to us for assistance and inquiries.
            </p>
            <div className="mt-7 flex items-center gap-x-5">
              <MdLocationOn className="text-2xl" />
              <div>
                <div className="text-lg font-medium">Our Location</div>
                <p className="text-sm">87/3 West dhanmondi, Shankar</p>
              </div>
            </div>
            <div className="mt-7 flex items-center gap-x-5 ">
              <MdCall className="text-2xl" />
              <div>
                <div className="text-lg font-medium">Phone Number</div>
                <p className="text-sm">+8801613408101</p>
              </div>
            </div>
            <div className="mt-7 flex items-center gap-x-5">
              <MdEmail className="text-2xl" />
              <div>
                <div className="text-lg font-medium">Email Address</div>
                <p className="text-sm">office@synexdigital.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
