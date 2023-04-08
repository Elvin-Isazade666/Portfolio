import React from 'react';
import {useScroll,motion} from "framer-motion";

const ExperienceIcon = ({reference}) => {
    const {scrollYProgress} = useScroll({
        target: reference,
        offset: ["center end","center center"]
    })
    return (
        <figure className='absolute left-0 stroke-dark dark:stroke-light'>
            <svg width={"75"} height={"75"} viewBox='0 0 100 100' className='-rotate-90 md:w-[60px] md:h-[40px] xs:w-[40px] xs:h-[40px]'>
                <circle r={"20"} cx={"75"} cy={"50"} className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none' />
                <motion.circle style={{pathLength: scrollYProgress}} r={"20"} cx={"75"} cy={"50"} className='stroke-[5px] fill-light
                dark:fill-dark' />
                <circle r={"10"} cx={"75"} cy={"50"} className='stroke-1 fill-primary dark:fill-primaryDark animate-pulse' />
            </svg>
        </figure>
    )
}

export default ExperienceIcon