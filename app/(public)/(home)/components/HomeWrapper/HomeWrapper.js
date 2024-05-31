import { Collaborate } from "@/app/components";
import {
  Banner,
  OurBlog,
  OurProjects,
  OurServices,
  Testimonial,
} from "../../components";

export default async function HomeWrapper() {
  return (
    <main>
      <Banner />
      <OurServices />
      <OurProjects />
      <Testimonial />
      <OurBlog />
      <Collaborate />
    </main>
  );
}
