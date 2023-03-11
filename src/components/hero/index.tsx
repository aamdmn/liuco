import GetStartedButton from "../common/GetStartedButton";
import CircleLarge from "../graphics/CircleLarge";


const Hero = () => {
  return (
    <div className="bg-black text-white w-full">
      <section className="h-[80vh] overflow-hidden w-full relative mt-28">
        <div className="flex flex-col items-center justify-center text-center h-3/4 z-50">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Create <span>Ecommerce</span>
            <br />
            The Better Way
          </h1>
          <p className="text-md mt-5">Don&apos;t get frustrated thinking about every step.</p>
          <div className="z-50 mt-14">
            <GetStartedButton />
          </div>
        </div>
        <div className="opacity-20 w-full flex justify-center -z-50">
          <div className="absolute top-5">
            <CircleLarge width="400" height="400" />
          </div>
          <div className="absolute top-72">
            <CircleLarge height="250" width="250" slow={true} />
          </div>
        </div>
      </section >
    </div >
  );
};

export default Hero;
