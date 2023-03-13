import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

function HalfCircle() {

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const controls = useAnimation();

    useEffect(() => {

        if (inView) {
            controls.start({
                pathLength: 0.05,
                pathSpacing: 0.05,
                pathOffset: 0,
                transition: {
                    duration: 2.5,
                },
            });
        } else {
            controls.start({
                pathLength: 1,
                pathSpacing: 1,
                pathOffset: 1,
                transition: {
                    duration: 0.5,
                },
            });
        }
    }, [inView, controls])

    return (
        <svg
            ref={ref}
            width="35rem"
            height="35rem"
            viewBox="0 0 757 875"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:rotate-12 w-full h-full"
        >
            <motion.path
                animate={controls}
                d="M259.355 785.095c-396.785-350.73 52.914-961.476 482.081-558.479"
                stroke="#000"
                strokeWidth={5}
                strokeDasharray="0 1"
            />
        </svg>
    );
}

export default HalfCircle;