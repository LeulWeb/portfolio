import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";


import award from "../assets/achivements/award.png";
import training from "../assets/achivements/training.png";
import safari from "../assets/achivements/safari.png";
import showcase from "../assets/achivements/showcase.png";
import { TypographyH2 } from "./typography/TypographyH2";

const ColorChangeCards = () => {
  return (
    <div className="p-4 md:p-8 text-white w-8/12 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8 w-full">
        <div className="grid col-span-3 grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
          <Card
            heading="Plan"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
            imgSrc={award}
          />
          <Card
            heading="Play"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
            imgSrc={training}
          />
          <Card
            heading="Connect"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
            imgSrc={safari}
          />
          <Card
            heading="Support"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
            imgSrc={showcase}
          />
        </div>

        <div>
          <section className="text-center w-full">
            <TypographyH2>Achievements</TypographyH2>
          </section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsum
            rem, iste mollitia inventore temporibus enim adipisci cum pariatur
            placeat tempore repudiandae perferendis ipsam. Unde reprehenderit
            harum similique impedit rem?
          </p>
        </div>
      </div>
    </div>
  );
};

const Card = ({
  heading,
  description,
  imgSrc,
}: {
  heading: string;
  description: string;
  imgSrc: string;
}) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative"
    >
      <div
        className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
        <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
        <div>
          <h4>
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }: { letter: string }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default ColorChangeCards;
