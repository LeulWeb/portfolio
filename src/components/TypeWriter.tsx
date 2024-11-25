import { Contact, File } from "lucide-react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

import { TypographyLarge } from "./typography/TypographyLarge";
import { Button } from "./ui/button";
import mypic from "../assets/my_pic/mypic_transparent_Craiyon1.png";



export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Greeting",
    },
    {
      text: "👋",
    },
    {
      text: "I am",
    },

    {
      text: "Leul",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <section className="flex flex-col md:flex-row items-center justify-center    ">
      <div className="flex flex-col items-center justify-center h-[40rem] order-last md:order-first  ">
        <p className="text-neutral-100  text-xs sm:text-base  ">
          Full Stack Website 💻 and Mobile 📱 App Developer
        </p>
        <TypewriterEffectSmooth words={words} />

        <div className="max-w-2xl py-5 text-center">
          <TypographyLarge>
            Got a website or app idea you want to bring to life? Let's make it
            happen!
          </TypographyLarge>
          <TypographyLarge>
            I'm Leul Webshet, a full-stack website and mobile app developer from
            Ethiopia. I'd love to help you turn your vision into a reality.
          </TypographyLarge>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <Button className="border-2 bg-transparent">
            {" "}
            <File /> My resume
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-800">
            {" "}
            <Contact></Contact> Contact Me
          </Button>
        </div>
      </div>

      <div className="order-first md:order-last ">
        <img src={mypic} className="h-[90vh] " alt="" />
      </div>
    </section>
  );
}
