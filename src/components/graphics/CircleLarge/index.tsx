interface Props {
    width?: string;
    height?: string;
}

const CircleLarge = ({ width, height }: Props) => {
    return (
        <svg
            className={`animate-spin-slow`}
            width={width || "466"}
            height={height || "466"}
            viewBox="0 0 466 466"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="233" cy="233" r="231.5" stroke="#EDF2F4" strokeWidth="3" strokeDasharray="20 20" />
        </svg>
    )
}

export default CircleLarge;