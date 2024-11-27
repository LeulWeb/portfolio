
import mypic from "../assets/my_pic/mypic_transparent_Craiyon.png";

import { Button } from "../components/ui/button";

import { TypographyP } from "./typography/TypographyP";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import { TypographyH1 } from "./typography/TypographyH1";

export const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 my-12 md:my-0 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row space-x-3 md:space-x-6  justify-center  ">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="flex flex-col space-y-4 text-gold">
                <TypographyH1>Got a project ?</TypographyH1>
                <TypographyH1> Let's build it 🚀</TypographyH1>
              </div>
              <div className="max-w-xl  py-5">
                <TypographyP>
                  I’m Leul Webshet, a Full Stack Developer and UI/UX Designer
                  passionate about creating seamless, user-friendly digital
                  experiences. Feel free to contact me
                </TypographyP>

                <div className="flex py-3 space-x-3 w-full">
                  <FaGithub className="text-3xl" />
                  <FaLinkedin className="text-3xl" />
                  <MdOutlineMail className="text-3xl" />
                  <FaTelegram className="text-3xl" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                asChild
                className="bg-[#FFD700] text-black hover:bg-[#FFD700]"
              >
                <a href="#projects">Contact Me</a>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent hover:bg-transparent hover:text-white"
                asChild
              >
                <a href="#contact">My Resume</a>
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
};
