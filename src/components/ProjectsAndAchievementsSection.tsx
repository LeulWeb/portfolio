import ProjectCarousel from "./Carousel";


import { TypographyH1 } from "./typography/TypographyH1";

export const ProjectsAndAchievementsSection = () => {
  return (
    <section  id="project" className="  md:w-10/12 w-11/12 my-24   mx-auto">
      <div className="w-full text-center">
        <TypographyH1>What Have I Built?</TypographyH1>
      </div>

      <ProjectCarousel />
      
    </section>
  );
};
