import { Collaborate } from "@/app/components";
import {
  Banner,
  OurBlog,
  OurProjects,
  OurServices,
  Testimonial,
} from "../../components";
import BgGlowEffect from "@/app/core/BgGlowEffect/BgGlowEffect";

export default async function HomeWrapper() {
  return (
    <main>
      <Banner />
      <OurServices />
      <OurProjects />
      <Testimonial />
      <OurBlog />
      <Collaborate />

      <>
        <BgGlowEffect className="top-40 right-[40%]" />
        <BgGlowEffect className="top-[450px] right-20" />
        <BgGlowEffect className="top-[650px] left-10" />
      </>
    </main>
  );
}
