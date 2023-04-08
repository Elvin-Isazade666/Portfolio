import { useScroll,motion } from 'framer-motion';
import React, { useRef } from 'react';
import ExperienceIcon from './ExperienceIcon';

const Detail = ({position,company,companyLink,time,adress,work}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between
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
            <h3 className='capitalize text-2xl font-bold sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            className='text-primary capitalize dark:text-primaryDark' target='_blank'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {adress}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end","center start"]
    })
    return (
        <div className='my-64'>
            <h2 className='w-full text-center text-8xl font-bold mb-40 md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div ref={ref} className='w-[75%] relative mx-auto lg:w-[90%] md:w-full'>
                <motion.div style={{scaleY: scrollYProgress}}  className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
                dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Detail companyLink={"https://mstock-ui-main.azurewebsites.net/"} position={"Software Engineer"} company={"MSTOCK"} time={"2022-Present"} adress={"Baku,28 May World Businnes Center"}
                        work={"I worked as a front end developer at mstock company"}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience