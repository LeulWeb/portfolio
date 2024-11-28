import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";



import tena_adam from '../assets/tena_adam.jpg'
import ag from '../assets/ag.png'
import roblas from '../assets/rbs.png'
import bmgh from '../assets/projects/bmgh.jpg'
import cashier from '../assets/projects/cashier.png'
import hb from '../assets/projects/hb.png'
import flora from '../assets/projects/hflora.jpg'
import logo from '../assets/projects/logo.jpg'
import rensys from '../assets/projects/rensys.jpg'
import tcu from '../assets/projects/tcu.jpg'
import yess from '../assets/projects/yess.jpg'

import { TypographySmall } from "./typography/TypographySmall";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const ProjectCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="py-8 my-12 " ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto ">
          <div className="flex items-center justify-between">
            <section className="text-center w-full">
              {/* <TypographyH2>Projects</TypographyH2> */}
            </section>

            <div className="flex items-center gap-2 py-5">
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-black p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-black p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ imgUrl, author, title, description }: PostType) => {
  return (
    <div
      className="relative shrink-0 p-4 cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <img
        src={imgUrl}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`An image for a fake blog post titled ${title}`}
      />
      <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">
        {author}
      </span>
      <p className="mt-1.5 text-lg font-medium">{title}</p>
      <TypographySmall>{description}</TypographySmall>
    </div>
  );
};

export default ProjectCarousel;

type PostType = {
  id: number;
  imgUrl: string;
  author: string;
  title: string;
  description: string;
};

const posts: PostType[] = [
  {
    id: 1,
    imgUrl: tena_adam,
    author: "Personal Project",
    title: "Tena Adam",
    description:
      "The AI-based multi-disease detection mobile app is designed to help users identify a range of health conditions, including Tuberculosis, heart disease, breast cancer, and liver diseases. The app is equipped with an intuitive admin dashboard that allows healthcare professionals to manage and track user data. Leveraging advanced AI algorithms, the app provides real-time, accurate disease detection, offering users a powerful tool for early diagnosis and health monitoring.",
  },
  {
    id: 2,
    imgUrl: roblas,
    author: "Client",
    title: "Roblas Supply Chain",
    description:
      "Transform your logistics with Roblas Supply Chain, leveraging cutting-edge technology and unmatched expertise to optimize efficiency, reduce operational costs, and enhance reliability. Our platform offers a comprehensive solution for managing and streamlining logistics processes, ensuring smooth and timely deliveries, and helping businesses stay ahead in a competitive market. Trust Roblas Supply Chain to revolutionize your logistics and improve your overall supply chain performance.",
  },
  {
    id: 99,
    imgUrl: tcu,
    author: "UI/UX Design @TCU",
    title: "UI/UX Design Contribution for TCU",
    description:
      "At True Culture University, I was involved in the UI/UX design of their mobile app, focusing on creating an intuitive and engaging user experience. My role included designing user interfaces that are visually appealing, easy to navigate, and align with the university's goals of providing students with a seamless digital experience. I worked closely with the development team to ensure the design was both functional and aesthetically pleasing.",
  },
  {
    id: 3,
    imgUrl: ag,
    author: "On update",
    title: "Agelgil Eco Packaging",
    description:
      "A responsive landing page for Agelgil Eco Packaging, optimized for SEO, built using React and Tailwind CSS. This project marks my first client work, where I focused on creating a fast, visually appealing, and search-engine-friendly site. Currently, I am updating the site to improve functionality and enhance the user experience, ensuring it remains modern and effective in meeting the client’s needs.",
  },
  {
    id: 4,
    imgUrl: yess,
    author: "Mobile App @Helder",
    title: "YESS International",
    description:
      "The YESS International mobile app is a comprehensive platform designed to connect users with essential services. I was responsible for building both the front-end and back-end of the app. The front-end was developed using Flutter, ensuring a smooth, cross-platform experience, while the back-end was powered by Laravel for robust performance and scalability. I also designed the app's user interface using Flutter, focusing on creating an intuitive and engaging experience for users.",
  },
  {
    id: 5,
    imgUrl: cashier,
    author: "Mobile App @Ashara",
    title: "Cashier App",
    description:
      "The Cashier App I built at Ashra Technologies is designed to streamline sales transactions. Developed using Flutter and BLoC for state management, the app ensures smooth performance and responsiveness. It connects with a Bluetooth printer to print receipts, providing a seamless checkout experience. I handled both the app development and UI design, focusing on efficiency and user-friendliness.",
  },
  {
    id: 6,
    imgUrl: flora,
    author: "Personal Project",
    title: "Healthy Flora",
    description:
      "The Healthy Flora project features an AI-based mango disease detection system built with Flutter. Using TensorFlow for image classification, the app analyzes mango images to detect potential diseases. I was responsible for the app development and UI design, ensuring an intuitive user experience while leveraging AI to provide accurate and real-time disease detection for mango crops.",
  },
  {
    id: 7,
    imgUrl: rensys,
    author: "Mobile App @Rensys",
    title: "Maintenance management system",
    description:
      "The Rensys Technician Management project, which we won at a hackathon, is designed to streamline technician workflows. Built with Flutter and GraphQL, the app provides real-time updates and efficient management tools. I was responsible for both the UI/UX design and app development, ensuring a seamless and user-friendly experience for technicians and managers alike.",
  },
  {
    id: 8,
    imgUrl: bmgh,
    author: "Mobile App @Helder",
    title: "BMGH Edu Hub",
    description:
      "BMGH Edu Hub is a mobile app designed for Ethiopian high school students, offering access to a variety of learning materials and tutorials. Built with Flutter, the app provides an intuitive platform for students to explore and read educational content. I was responsible for both the app development and UI/UX design, ensuring an engaging and user-friendly experience for learners.",
  },
  {
    id: 9,
    imgUrl: hb,
    author: "Web App - Inprogress",
    title: "Habtamu Alemayhu",
    description:
      "The Blog and Portfolio for Habtamu Alemayhu is a website built with Tailwind CSS, React for the front-end, and Laravel for the back-end. Currently in progress, the site aims to showcase Habtamu's work and blog content in an aesthetically pleasing and user-friendly way. I’m responsible for both the front-end development and UI design, ensuring a smooth, modern, and responsive experience.",
  },
  {
    id: 10,
    imgUrl: logo,
    author: "Logo Design",
    title: "Read Ethiopia Association",
    description:
      "I designed the logo for Read Ethiopia Association, focusing on creating a visual identity that reflects the organization’s mission to promote literacy and education in Ethiopia. The logo combines modern design elements with symbolism to represent the association’s goals and values.",
  },
];
