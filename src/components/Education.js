import { useScroll,motion } from 'framer-motion';
import React, { useRef } from 'react';
import ExperienceIcon from './ExperienceIcon';

const Detail = ({type,time,place,info}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mt-0 w-[46%] mx-auto flex flex-col items-center justify-between
    md:w-[80%]'>
        <ExperienceIcon reference = {ref} />
        <motion.div initial= {{
            y:50
        }}
        whileInView={{
            y:0,
            transition: {
                duration: 0.5,
                type: "spring"
            }
        }}>
            <h3 className='capitalize text-2xl font-bold sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end","center start"]
    })
    return (
        <div className='my-64'>
            <h2 className='w-full text-center text-8xl font-bold mb-40 md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>
            <div ref={ref} className='w-[75%] relative mx-auto lg:w-[90%] md:w-full'>
                <motion.div style={{scaleY: scrollYProgress}}  className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
                dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Detail time={"2005-2016"} info={"I have been studying in high school for 11 years"}
                        type={"Bachelor Of Science In Computer Science"} place={"Azerbaijan Baku Baladjary settlement"}
                    />
                    <Detail time={"2016-2020"} info={"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."}
                        type={"Bachelor Of Science In Computer Science"} place={"Azerbaijan State Oil and Industry University"}
                    />
                    <Detail time={"2021-2022"} info={"This is a web developer training course"}
                        type={"Front End Developer"} place={"e-Gov Development Center Tech academy"}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education