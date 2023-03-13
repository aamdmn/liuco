import * as React from "react";
import { motion } from "framer-motion";

function Marked(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="3em"
            height="1.5em"
            viewBox="0 0 230 230"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <motion.circle
                cx={115}
                cy={115}
                r={111.5}
                stroke="#fff"
                strokeWidth={12}
                initial={{
                    pathLength: 1,
                    pathSpacing: 1,
                    pathOffset: 1,
                }}
                animate={{
                    pathLength: 0.05,
                    pathSpacing: 0.05,
                    pathOffset: 0,
                }}
                transition={{
                    duration: 1.5,
                }}
            />
            <motion.path
                initial={{
                    pathLength: 0,
                }}
                animate={{
                    pathLength: 1,
                }}
                transition={{
                    duration: 1.5,
                    delay: 0.5,
                }}
                d="M165.096 84.957l-64.515 66.474-32.27-34.966"
                stroke="#fff"
                strokeWidth={12}
                strokeLinecap="round"
            />
        </svg>
    );
}

export default Marked;