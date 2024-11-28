import telegram from "../assets/icons8-telegram.svg";
import phone from "../assets/icons8-phone.svg";
import github from "../assets/icons8-github.svg";
import gmail from "../assets/icons8-gmail.svg";
import linked from "../assets/icons8-linkedin.svg";

import { TypographySmall } from "./typography/TypographySmall";

import { TypographyH2 } from "./typography/TypographyH2";
import { Label } from "./ui/label";

export const ContactSection = () => {
  return (
    <section>
      <section id="contact" className="">
        <div className="container px-6 py-12 mx-auto ">
          <div>
            <div className="py-2 text-gold">
              <TypographyH2>Let's Discuss</TypographyH2>
            </div>

            <TypographySmall>
              "Let’s turn your ideas into reality. Get in touch, and let's build
              something amazing together!"
            </TypographySmall>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2 ">
            <div className="grid grid-cols-1   md:grid-cols-2 p-4 py-6">
              {/* mail */}
              <a
                href="mailto:leulwebsdev@gmail.com"
                target="_blank"
                className="flex"
              >
                <div className="inline-block p-3 text-blue-500 ">
                  <img src={gmail} alt="" />
                </div>

                <div>
                  <h2 className="mt-4 text-base font-medium text-white ">
                    leulwebsdev@gmail.com
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 ">
                    I alway check my email
                  </p>
                </div>
              </a>

              {/* phone */}
              <div className="flex">
                <div className="inline-block p-3 text-blue-500 ">
                  <img src={phone} alt="" />
                </div>

                <div>
                  <h2 className="mt-4 text-base font-medium text-white ">
                    +251908883884
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 ">
                    Feel free to call me anytime
                  </p>
                </div>
              </div>

              {/* telegram */}
              <a className="flex" href="https://t.me/leuldev" target="_blank">
                <div className="inline-block p-3 text-blue-500 ">
                  <img src={telegram} alt="" />
                </div>

                <div>
                  <h2 className="mt-4 text-base font-medium text-white ">
                    @leuldev
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 ">
                    I am also active on telegram
                  </p>
                </div>
              </a>

              {/* github */}
              <div className="flex">
                <div className="inline-block p-3 text-blue-500 ">
                  <img src={github} alt="" />
                </div>

                <div>
                  <a href="https://github.com/LeulWeb" target="_blank">
                    <h2 className="mt-4 text-base font-medium text-white ">
                      github.com/LeulWeb
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 ">
                      Explore my github profile
                    </p>
                  </a>
                </div>
              </div>

              {/* linked in */}
              <a
                href="https://www.linkedin.com/in/leul-webshet-8044122b4/"
                className="flex"
                target="_blank"
              >
                <div className="inline-block p-3 text-blue-500 ">
                  <img src={linked} alt="" />
                </div>

                <div>
                  <h2 className="mt-4 text-base font-medium text-white ">
                    https://t.me/leulweb
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 ">
                    Check my digital office 😂
                  </p>
                </div>
              </a>
            </div>

            <div className="p-4 py-6 rounded-lg bg-black text-white  md:p-8">
              <form
                action="https://formsubmit.co/leulwebsdev@gmail.com"
                method="post"
              >
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <Label className="block mb-2 ">First Name</Label>
                    <input
                      type="text"
                      required
                      name="first_name"
                      placeholder="John "
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg    focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <Label className="block mb-2 ">Last Name</Label>
                    <input
                      type="text"
                      placeholder="Doe (Optional)"
                      name="last_name"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg    focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <Label className="block mb-2 ">Email Address</Label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    required
                    name="email"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg    focus:border-blue-400  (555) 000-0000er-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <Label className="block mb-2 ">What is on you mind ?</Label>
                  <textarea
                    required
                    name="message"
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56    focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-gold rounded-lg  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
