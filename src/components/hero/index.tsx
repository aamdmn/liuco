import GetStartedButton from "../common/GetStartedButton";
import CircleLarge from "../graphics/CircleLarge";


const Hero = () => {
  return (
    <div className="bg-black text-white w-full">
      <section className="h-[80vh] overflow-hidden w-full relative mt-28 md:mt-28 md:flex">
        <div className="flex flex-col items-center justify-center text-center w-full h-3/4 md:h-full md:text-left md:items-end">
          <div className="md:flex md:flex-col md:max-w-[38rem] md:mb-20 md:mr-32 z-50">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
              Create <span className="text-red underline underline-offset-4 decoration-4">Ecommerce</span>
              <br />
              The Better Way
            </h1>
            <p className="text-md md:text-lg mt-6">Without getting frustrated thinking about every step.</p>
            <div className="mt-14 flex justify-center md:justify-start">
              <GetStartedButton />
            </div>
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
        <div className="hidden opacity-20 md:opacity-100 w-full md:flex justify-center -z-50 md:z-0 md:relative">
          <div className="absolute top-5">
            <CircleLarge width="500" height="500" />
          </div>
          <div className="absolute top-72 md:left-24 opacity-50">
            <CircleLarge height="350" width="350" />
          </div>
        </div>
      </section >
    </div >
  );
};

export default Hero;
