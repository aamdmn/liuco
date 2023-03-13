import GetStartedButton from "../common/GetStartedButton";
import CircleLarge from "../graphics/CircleLarge";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="bg-black text-white w-full">
      <section className="h-[85vh] overflow-hidden w-full relative mt-28 md:mt-28 md:flex md:justify-center">
        <div className="flex flex-col items-center justify-center text-center w-full h-3/4 md:h-full md:text-left md:items-center">
          <div className="md:flex md:flex-col md:max-w-[38rem] md:mb-20 md:mr-20 z-50">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold"
            >
              Create <span className="text-red underline underline-offset-4 md:decoration-4 decoration-2">Ecommerce</span>
              <br />
              The Better Way
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-md md:text-lg mt-6"
            >Without getting frustrated thinking about every step.</motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="mt-14 flex justify-center md:justify-start"
            >
              <GetStartedButton />
            </motion.div>
          </div>
        </div>
        <div className="md:hidden opacity-20 md:opacity-100 w-full flex justify-center -z-50 md:z-0 md:relative">
          <div className="absolute top-5">
            <CircleLarge width="400" height="400" />
          </div>
          <div className="absolute top-72 md:left-48 opacity-50">
            <CircleLarge height="250" width="250" />
          </div>
        </div>
        <div className="hidden opacity-20 md:opacity-100 w-3/5 md:flex justify-center -z-50 md:z-0 md:relative mr-20">
          <div className="absolute top-5">
            <CircleLarge width="450" height="450" />
          </div>
          <div className="absolute top-72 md:left-24 opacity-50">
            <CircleLarge height="300" width="300" />
          </div>
        </div>
      </section >
    </div >
  );
};

export default Hero;
