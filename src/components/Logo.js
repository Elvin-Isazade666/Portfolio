import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
    const MotionLink = motion(Link);
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href={"/"} className="w-16 h-16 flex items-center justify-center bg-dark rounded-full text-2xl
                font-bold text-light border border-solid border-transparent dark:border-light
            "
            whileHover={{
                backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                transition: {duration: 1, repeat: Infinity}
            }}
            >IE</MotionLink>
        </div>
    )
}

export default Logo