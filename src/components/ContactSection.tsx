import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {  Mail, Phone } from "lucide-react";
import { TypographyH1 } from "./typography/TypographyH1";

import HoverCard from "./HoverCard";
import { TypographyP } from "./typography/TypographyP";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export const  ContactSection = () =>{
  return (
    <section className="h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="w-full text-center">
          <TypographyH1>Let's talk</TypographyH1>
        </div>
        <div className="flex md:flex-row flex-col    justify-between md:items-center">
          {/* Contact Form */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <form className="space-y-4 w-[30vw]">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Input placeholder="Subject" />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <HoverCard />
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">
                Contact Information
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <a
                    href="mailto:leulwebsdev@gmail.com"
                    className="flex items-center gap-2 "
                  >
                    <TypographyP>leulwebdev@gmail.com</TypographyP>
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-2 "
                  >
                    <TypographyP>+251908883884</TypographyP>
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <GitHubLogoIcon className="w-5 h-5" />
                  <a
                    href="https://github.com/LeulWeb"
                    className="flex items-center gap-2 "
                  >
                    <TypographyP>Github</TypographyP>
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <LinkedInLogoIcon className="w-5 h-5" />
                  <a
                    href="https://www.linkedin.com/in/leul-webshet-8044122b4/"
                    className="flex items-center gap-2 "
                  >
                    <TypographyP>LinkedIn</TypographyP>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
