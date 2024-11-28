
import { Timeline } from "@/components/ui/timeline";
import tcu from '../assets/projects/tcu.jpg'
import tcu_logo from '../assets/logo/tcu_logo.jpeg'
import helder_logo from "../assets/logo/helder_logo.jpeg"
import ashara_logo from "../assets/logo/ashara_logo.jpeg"
import omishtu_logo from "../assets/logo/omishtu_logo.jpeg"
import bitec_logo from "../assets/logo/bitec_logo_transparent_Craiyon.png"

import yess from "../assets/projects/yess.jpg"
import bmgh from "../assets/projects/bmgh.jpg"
import milka from "../assets/projects/milka.png"
import niimblr from "../assets/projects/niimblr.png"
import cashier from "../assets/projects/cashier.png"
import safari from "../assets/achivements/safari.png"
import rensys from "../assets/projects/rensys.jpg"
import { TypographyP } from "./typography/TypographyP";
import { TypographyH4 } from "./typography/TypographyH4";


export function TimelineSection() {
  const data = [
    {
      title: "True Culture University",
      logo: tcu_logo,
      content: (
        <div>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
            <img
              src={tcu}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="p-1 md:p-3">
              <div className="text-gold w-full">
                <TypographyH4>UI/UX Designer</TypographyH4>
              </div>
              <TypographyP>
                As a UI/UX designer at True Culture University, I collaborated
                with the team to create user-friendly interfaces for their app.
                I focused on wireframing, prototyping, and ensuring the design
                met user needs while enhancing usability and visual appeal.
              </TypographyP>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Helder Technologies Solution PLC",
      logo: helder_logo,
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={yess}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={bmgh}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={milka}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={niimblr}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="p-3">
            <div className="text-gold w-full">
              <TypographyH4>Lead Backend & Mobile App Developer</TypographyH4>
            </div>
            <TypographyP>
              As the Lead Developer at Helder Technologies, I lead backend and
              mobile app development using Flutter and Laravel. I built scalable
              APIs with REST, ensuring seamless integration and delivering
              high-performance solutions for both web and mobile platforms.
            </TypographyP>
          </div>
        </div>
      ),
    },
    {
      title: "Ashara Techonologies",
      logo: ashara_logo,
      content: (
        <div>
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={cashier}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

            <div className="p-1 md:p-3">
              <div className="text-gold w-full">
                <TypographyH4>Mobile App Developer</TypographyH4>
              </div>
              <TypographyP>
                As a Remote Mobile App Developer at Ashara Technologies, I
                contributed to building a Flutter-based cashier app. I
                implemented Bluetooth connectivity to enable seamless receipt
                printing, ensuring smooth and efficient transactions for users.
              </TypographyP>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Omishtu-Joy AgTech Engineering PLC ",
      logo: omishtu_logo,
      content: (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={safari}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

            <div className="p-1 md:p-3">
              <div className="text-gold w-full">
                <TypographyH4>Web Developer Instructor</TypographyH4>
              </div>
              <TypographyP>
                As a Website Development Instructor at Omishtu, I taught
                students foundational and advanced web development skills,
                covering HTML, CSS, JavaScript, PHP, MySQL, and React. I guided
                students through hands-on projects, fostering practical
                knowledge and problem-solving skills.
              </TypographyP>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "BiTec, Bahir Dar University",
      logo: bitec_logo,
      content: (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={rensys}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

            <div className="p-1 md:p-3">
              <div className="text-gold w-full">
                <TypographyH4>Mobile App Developer</TypographyH4>
              </div>
              <TypographyP>
                At BiTec, Bahir Dar University, I won a hackathon by developing
                a Technician Management mobile app. I designed the UI and built
                the app using Flutter, Dart, and GraphQL, delivering a seamless
                user experience and robust functionality.
              </TypographyP>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-transparent" id="work" >
      <Timeline data={data} />
    </div>
  );
}
