import Image from "next/image";
import Link from "next/link";
import { text } from "node:stream/consumers";

interface Props {
    textColor?: string;
}

export default function GetStartedButton({ textColor }: Props) {

    return (
        <Link href={'/signin'} className={`${!textColor ? 'text-white' : `text-${textColor}`} rounded-3xl bg-red px-14 py-4 flex items-center border-2 border-red hover:bg-black duration-150 `}>
            Get Started
            <div className="relative h-5 w-5 ml-1 items-center justify-center">
                <Image src={'/icons/arrow-up-right.svg'} alt="arrow up right" fill />
            </div>
        </Link>
    )
}