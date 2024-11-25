// import { TypewriterEffectSmoothDemo } from "./TypeWriter"

// export const HeroSection = () => (
//   <div className="min-h-[95vh] w-11/12 md:w-8/12 mx-auto flex flex-col md:flex-row items-center justify-center  ">
//     <TypewriterEffectSmoothDemo />
//   </div>
// );

import mypic from "../assets/my_pic/mypic_transparent_Craiyon.png";



import { Button } from "@/components/ui/button";

export const  HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 my-12 md:my-0 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row   justify-center  ">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Full Stack Developer
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Bridging the gap between front-end and back-end. Creating
                seamless, efficient, and scalable web applications.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center my-5 md:my-0">
            <img
              src={mypic}
              alt="Full Stack Developer Illustration"
              width={400}
              height={400}
              className="aspect-square overflow-hidden rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

