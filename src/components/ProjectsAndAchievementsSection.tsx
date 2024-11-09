import BlogPostCarousel from "./Carousel";
import { Certificates } from "./Certficates";
import { TypographyH1 } from "./typography/TypographyH1";

export const ProjectsAndAchievementsSection = () => {
  return (
    <section className="min-h-screen  md:w-10/12 w-11/12  mx-auto">
      <div className="w-full text-center">
        <TypographyH1>My Projects and Achievements</TypographyH1>
      </div>

      <BlogPostCarousel />
    </section>
  );
};
