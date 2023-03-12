import GetStartedButton from "../common/GetStartedButton";
import HalfCircle from "../graphics/HalfCircle";
import HalfCirclePoint from "../graphics/HalfCirclePoint";
import { motion } from "framer-motion";

export default function Points() {
    return (
        <div className="w-full overflow-hidden">
            <section className="p-10 my-72 md:my-36 mt-[15rem] md:mt-[10rem] flex items-center w-full justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl md:text-4xl font-satoshiM leading-10 max-w-5xl"
                >Our cutting-edge AI technology powers tools designed to help you maximize sales and customer satisfaction.</motion.h1>
                <div className="absolute md:block md:relative opacity-20 md:opacity-100 w-full md:w-fit -z-20">
                    <HalfCircle />
                </div>
            </section>
            <section className="p-10 my-72 md:my-36 flex items-center justify-center">
                <div className="absolute md:block md:mb-64 mb-10 md:relative opacity-20 md:opacity-100 -z-20">
                    <HalfCirclePoint />
                </div>
                <motion.h1
                    className="text-3xl md:text-4xl font-satoshiM leading-10 max-w-5xl w-full"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Liuco is <span className="text-red">easy to use</span>, <span className="text-red">cost-effective</span>, and requires <span className="text-red">no technical expertise</span>. Start boosting your e-commerce results.</motion.h1>
            </section>
            <section className="p-10 my-72 md:my-36 mb-[10rem] flex items-center justify-center">
                <div className="mb-36">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-3xl md:text-4xl leading-10 font-satoshiM"
                    >Try Liuco and see how AI can transform your e-commerce business.</motion.h1>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-16"
                    >
                        <GetStartedButton />
                    </motion.div>
                </div>
                <div className="absolute md:block md:relative opacity-20 md:opacity-100 w-full md:w-fit -z-20">
                    <HalfCircle />
                </div>
            </section>
        </div>
    );
}