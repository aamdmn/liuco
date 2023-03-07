import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-black text-white w-full">
      <section
        className="h-[80vh] container grid justify-center items-center gap-6 py-8 md:py-12 lg:py-36 felx-wrap flex-col mt-24 fadeInUp mx-auto w-full text-center"
        data-wow-delay=".2s relative"
      >
        <div className="lg:flex">
          <div className="lg:w-1/2">
            <h1 className="mb-5 text-4xl text-left font-satoshiM leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Create <span className="underline text-red">Ecommerce</span><br />The Better Way
            </h1>
          </div>
          <div className="z-0 lg:w-1/2 opacity-50 absolute left-[2%] overflow-hidden top-[25%]">
            <div className="lg:relative w-[23rem] h-[25rem] md:h-[33rem] md:w-[35rem] ">
              <Image src={'/images/hero-image.svg'} alt='hero image' fill className="object-fill" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
