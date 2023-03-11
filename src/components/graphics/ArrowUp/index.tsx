import React from "react";

interface Props {
    color?: string;
}

export const ArrowUp = ({ color }: Props) => {
    return (
        <svg
            width="31"
            height="50"
            viewBox="0 0 31 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M15.3841 2.91778L16.6349 1.59618L15.3841 0.278316L14.1333 1.59618L15.3841 2.91778ZM14.1333 4.23938L28.2667 19.1727L30.7683 16.5295L16.6349 1.59618L14.1333 4.23938ZM14.1333 1.59618L0 16.5295L2.5016 19.1727L16.6349 4.23938L14.1333 1.59618ZM13.6175 2.91778V49.5844H17.1508V2.91778H13.6175Z" fill={`${!color ? "#14151F" : color}`} />
        </svg>
    )
}