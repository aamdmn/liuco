import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Icon() {

    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    const controls = useAnimation();

    React.useEffect(() => {
        if (inView) {
            controls.start({
                pathLength: 0.06,
                pathSpacing: 0.061,
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
            viewBox="0 0 1100 1100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:rotate-12 w-full h-full md:h-fit"
        >
            <motion.path
                animate={controls}
                d="M515.828 223.154C835.07 285.248 503.551 636.695 877.5 728.075M374.477 1067.12c453.846 33.45 96.704-425.884 505.023-338.621m-2-.424c1.546.378 4.5.959 2 .424m-2-.424l2 .424"
                stroke="#000"
                strokeWidth={6}
                strokeDasharray="0 1"
            />
        </svg>
    );
}

export default Icon;