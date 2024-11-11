import { HiOutlineMail } from "react-icons/hi";
import { TypographyH3 } from "./typography/TypographyH3"
import { TypographyP } from "./typography/TypographyP";
import { TypographySmall } from "./typography/TypographySmall";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export const ContactCard  = ()=>{
  return (
    <div>
      <div className="w-full text-center">
        <TypographyH3>My Address</TypographyH3>
      </div>
      <TypographyP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        assumenda magnam
      </TypographyP>

      <div className="grid grid-cols-2 gap-4 place-content-center">
        <div>
          <div className="flex items-center">
            <HiOutlineMail />
            <TypographySmall>Email</TypographySmall>
          </div>
          <p>leulwebdev@gmail.com</p>
        </div>
        {/* Email */}
        <div>
          <div className="flex items-center">
            <HiOutlineMail />
            <TypographySmall>Phone</TypographySmall>
          </div>
          <p>+251908883884</p>
        </div>

        <div className="flex w-screen py-3 md:w-full justify-between">
        {/* Telegram */}
          <div>
            <div className="flex items-center">
              <FaTelegram />
              <TypographySmall>Telegram</TypographySmall>
            </div>
          </div>

          {/* Linked In */}
          <div>
            <div className="flex items-center">
              <BsLinkedin />
              <TypographySmall>LinkedIn</TypographySmall>
            </div>
          </div>

          {/* Github */}

          <div>
            <div className="flex items-center">
              <FaGithub />
              <TypographySmall>Github</TypographySmall>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}