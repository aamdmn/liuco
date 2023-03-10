import Image from "next/image";
import Link from "next/link";
import GetStartedButton from "../common/GetStartedButton";

const Hero = () => {
  return (
    <div className="bg-black text-white w-full">
      <section
        className="h-[80vh] overflow-hidden w-full relative grid md:flex justify-center items-center gap-6 py-8 md:py-12 lg:py-36 felx-wrap  mt-24 fadeInUp mx-auto text-center"
        data-wow-delay=".2s"
      >
        <div className="lg:flex w-full items-center">
          <div className="md:w-1/2 lg:h-full">
            <div className="block lg:flex flex-col w-full items-center justify-center">
              <div className="items-left">
                <div className="flex flex-col items-left max-w-[40rem]">
                  <h1 className="mb-5 text-4xl text-left font-satoshiM leading-tight text-white md:text-7xl md:leading-tight">
                    Create <span className="underline text-red">Ecommerce</span><br />The Better Way
                  </h1>
                  <p className="text-left">Save time and don&apos;t get frusrated thinking about every step</p>
                </div>
                <div className="max-w-[35rem] relative items-left flex justify-start mt-10">
                  <GetStartedButton />
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
          <div className="z-0 md:w-1/2 opacity-50 absolute md:relative left-[2%] overflow-hidden top-[25%]">
            <div className="lg:relative w-[23rem] h-[25rem] md:h-[33rem] md:w-[35rem] ">
              <Image src={'/images/hero-image.svg'} alt='hero image' fill className="object-fill " />
            </div>
          </div>
          {/* <div className="z-0 md:w-1/2 opacity-50 absolute md:relative left-[2%] overflow-hidden top-[25%]">
            <div className="lg:relative w-[23rem] h-[25rem] md:h-[33rem] md:w-[35rem]">
              <Image src={'/images/large-circle.svg'} alt='hero image' fill className="object-fill animate-spin-2slow" />
            </div>
          </div>
          <div className="z-0 md:w-1/2 opacity-50 absolute md:relative left-[2%] overflow-hidden top-[25%]">
            <div className="lg:relative w-[20rem] h-[20rem] md:h-[20rem] md:w-[20rem] ">
              <Image src={'/images/small-circle.svg'} alt='hero image' fill className="object-fill animate-spin-slow" />
            </div>
          </div> */}
        </div>
      </section >
    </div >
  );
};

export default Hero;
