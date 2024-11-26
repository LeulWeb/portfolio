
import { TypographyH1 } from "./typography/TypographyH1";
import { ContactCard } from "./ContactCard";
import { ContactForm } from "./ContactForm";
import { TypographySmall } from "./typography/TypographySmall";
import { TypographyH3 } from "./typography/TypographyH3";
import { TypographyLarge } from "./typography/TypographyLarge";
import { FaGithub, FaLinkedin, FaPhone, FaTelegram } from "react-icons/fa";
import { CgMail, CgMaximize } from "react-icons/cg";
import talk from "../assets/talk.svg"
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { TypographyMuted } from "./typography/TypographyMuted";
import { GiChainMail } from "react-icons/gi";


export const  ContactSection = () =>{
  return (
    <section className=" my-7 border-2 w-11/12 md:w-5/12 mx-auto rounded-xl border-stone-600 ">
      <div className="text-center flex space-y-5 flex-col p-5">
        <TypographyH3>Let's talk</TypographyH3>
        <TypographyMuted>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quisquam fuga libero eos nihil, dolorum aliquam atque nisi accusantium, doloremque minus labore, vel commodi suscipit obcaecati! Corrupti nostrum quibusdam exercitationem.</TypographyMuted>

        <div className="flex space-x-3 w-full justify-center ">
           <FaTelegram  className="size-8" />
           <FaGithub className="size-8" />
           <FaLinkedin className="size-8" />
           <GiChainMail className="size-8" />
        </div>
      </div>
      <div className="  flex flex-col justify-center items-center  p-7 text-start w-full  ">
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-x-6 w-full">
          <div className="">
            <Label>First Name</Label>
            <Input placeholder="Enter your first name" />
          </div>
          <div className="w-full">
            <Label>Last Name</Label>
            <Input placeholder="Enter your first name" />
          </div>
        </div>

        {/* email */}
        <div className="w-full py-5">
          <Label>Email</Label>
          <Input className="w-full" />
        </div>

        {/* message */}

        <div className="w-full py-5">
          <Label>Message</Label>
          <Textarea className="w-full" />
        </div>

        <div className="w-full py-2">
          <Button variant="outline" className="w-full bg-transparent ">
            Send
          </Button>
        </div>
      </div>
    </section>
  );
}
