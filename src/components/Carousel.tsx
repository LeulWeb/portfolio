import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

import { TypographyH2 } from "./typography/TypographyH2";

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

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const BlogPostCarousel = () => {
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
    <section className="py-8 " ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto ">
          <div className="flex items-center justify-between">
            <section className="text-center w-full">
              <TypographyH2>Projects</TypographyH2>
            </section>

            <div className="flex items-center gap-2">
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
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
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
      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  );
};

export default BlogPostCarousel;

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
    imgUrl:tena_adam,
    author: "Personal Project",
    title: "Tena Adam",
    description:
      "AI based multi disease detection, Mobile App with admin dashboard to detect diseases like Tuberculosis, heart disease, breast cancer and liver diseases",
  },
  {
    id: 2,
    imgUrl: roblas,
    author: "Client",
    title: "Roblas Supply Chain",
    description:
      "Transform your logistics with cutting-edge technology and unmatched expertise. Optimize efficiency, reduce costs, and enhance reliability with Roblas Supply Chain.",
  },
  {
    id: 99,
    imgUrl: tcu,
    author: "UI/UX Design @TCU",
    title: "UI/UX Design Contribution for TCU",
    description:
      "Transform your logistics with cutting-edge technology and unmatched expertise. Optimize efficiency, reduce costs, and enhance reliability with Roblas Supply Chain.",
  },
  {
    id: 3,
    imgUrl:ag,
    author: "On update",
    title: "Agelgil Eco Packaging",
    description:
      "Responsive Landing page optimized for SEO for Agelgil Eco Packagin, built using react and tailwindcss. This is the first project I built for client, currently I am updating the site. ",
  },
  {
    id: 4,
    imgUrl: yess,
    author: "Mobile App @Helder",
    title: "YESS International",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    imgUrl: cashier,
    author: "Mobile App @Ashara",
    title: "Cashier App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    imgUrl:flora,
    author: "Personal Project",
    title: "Healthy Flora",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 7,
    imgUrl: rensys,
    author: "Mobile App @Rensys",
    title: "Maintenance management system",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 8,
    imgUrl: bmgh,
    author: "Mobile App @Helder",
    title: "BMGH Edu Hub",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 9,
    imgUrl: hb,
    author: "Web App - Inprogress",
    title: "Habtamu Alemayhu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 10,
    imgUrl: logo,
    author: "Logo Design", 
    title: "Read Ethiopia Association",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
];
