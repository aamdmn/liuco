import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section
        className="container grid justify-center gap-6 py-8 md:py-12 lg:py-36 felx-wrap flex-col items-center w-full mt-24 px-4 fadeInUp mx-auto max-w-[900px] text-center"
        data-wow-delay=".2s"
      >
        <h1 className="mb-5 text-3xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
          Liuco
        </h1>
        <h1 className="mb-5 text-3xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
          Create Ecommerce The Better Way
        </h1>
      </section>
      <hr className="border-slate-200" />
    </div>
  );
};

export default Hero;
