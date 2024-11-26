
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


export function TimelineSection() {
  const data = [
    {
      title: "True Culture University",
      logo: tcu_logo,
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={tcu}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, at
                omnis sit temporibus cupiditate animi incidunt blanditiis
                aliquid odio quod non illum magni deserunt quia, itaque sunt et
                eveniet asperiores!
              </p>
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
        </div>
      ),
    },
    {
      title: "Ashara Techonologies",
      logo: ashara_logo,
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={cashier}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, at
                omnis sit temporibus cupiditate animi incidunt blanditiis
                aliquid odio quod non illum magni deserunt quia, itaque sunt et
                eveniet asperiores!
              </p>
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
          <div className="grid grid-cols-2 gap-4">
            <img
              src={safari}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, at
                omnis sit temporibus cupiditate animi incidunt blanditiis
                aliquid odio quod non illum magni deserunt quia, itaque sunt et
                eveniet asperiores!
              </p>
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
          <div className="grid grid-cols-2 gap-4">
            <img
              src={rensys}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, at
                omnis sit temporibus cupiditate animi incidunt blanditiis
                aliquid odio quod non illum magni deserunt quia, itaque sunt et
                eveniet asperiores!
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-transparent">
      <Timeline data={data} />
    </div>
  );
}
