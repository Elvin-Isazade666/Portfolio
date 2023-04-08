import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({text,className = ""}) => {
    const quote = {
        initial: {
        },
        animate: {
            transition: {
                delay: 0.5,
                staggerChildren: 0.08
            }
        }
    }
    const singleWord = {
        initial: {
            opacity:0,
            y: 50
        },
        animate: {
            opacity:1,
            y : 0,
            transition: {
                duration: 1
            }
        }
    }
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
            <motion.h1 
                variants={quote}
                initial="initial"
                animate="animate"
                className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light ${className}`}>
                {
                    text.split(" ").map((word,index) => <motion.span
                        variants={singleWord}
                        className='inline-block' key={word +"-"+index}>{word}&nbsp;</motion.span>)
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText