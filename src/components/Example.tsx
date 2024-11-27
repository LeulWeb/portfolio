import { motion, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { IoMdDesktop } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuServer } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";

const Example = () => {
  return (
    <>

      <SwapColumnFeatures />

    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({
  featureInView,
}: {
  featureInView: FeatureType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
  featureInView: FeatureType;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen "
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-full bg-gold text-black px-2 py-1.5 text-xs font-medium ">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold">{featureInView.title}</p>
          <p className="text-slate-600">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
  return (
    <div className="relative h-96 w-full rounded-xl bg-slate-800 shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="p-2">
        <p className="font-mono text-sm text-slate-200">
          <span className="text-green-300">$</span> Leul build awesome {" "}
          <span className="inline-block rounded bg-gold text-black px-1 font-semibold">
            "{featureInView.title}"
          </span>{" "} 
          
        </p>
      </div>

      <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700">
        <featureInView.Icon />
      </span>
    </div>
  );
};

export default Example;

type FeatureType = {
  id: number;
  callout: string;
  title: string;
  description: string;
  contentPosition: "l" | "r";
  Icon: IconType;
};

const features: FeatureType[] = [
  {
    id: 1,
    callout: "Flutter, dart",
    title: "Cross platform Mobile App",
    description:
      "I build high-performance cross-platform mobile apps using Flutter and Dart, delivering seamless experiences on both iOS and Android.",
    contentPosition: "r",
    Icon: IoPhonePortraitOutline,
  },
  {
    id: 2,
    callout: "React,NextJs",
    title: "Front End",
    description:
      "I create high-performance cross-platform mobile apps with Flutter and Dart, and build dynamic front-end experiences using React, Next.js, React Query, and Redux Toolkit.",
    contentPosition: "l",
    Icon: IoMdDesktop,
  },
  {
    id: 3,
    callout: "Laravel, Go",
    title: "Backend",
    description:
      "I build high-performance cross-platform mobile apps with Flutter and Dart, dynamic front-end experiences using React, Next.js, React Query, and Redux Toolkit, and robust backends with Laravel and Node.js.",
    contentPosition: "r",
    Icon: LuServer,
  },
  {
    id: 4,
    callout: "Figma, AdobeXD",
    title: "UI/UX Design",
    description:
      "I specialize in crafting intuitive UI designs using Figma and conducting thorough UX research to create seamless, user-centered digital experiences.",
    contentPosition: "l",
    Icon: MdOutlineDesignServices,
  },
];
