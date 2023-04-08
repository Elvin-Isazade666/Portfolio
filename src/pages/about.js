import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from "../../public/images/profile/elvin.jpg";
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionPageEffect from '@/components/TransitionPageEffect';

const About = () => {
    const AnimatedValues = ({ value }) => {
        const ref = useRef(null);
        const motionValue = useMotionValue(0);
        const springValue = useSpring(motionValue, { duration: 3000 });
        const isInView = useInView(ref, { once: true });
        useEffect(() => {
            if (isInView) {
                motionValue.set(value)
            }
        }, [isInView, motionValue, value]);
        useEffect(() => {
            springValue.on("change", (latest) => {
                if (ref.current && latest.toFixed(0) <= value) {
                    ref.current.textContent = latest.toFixed(0)
                }
            })
        }, [springValue, value])
        return <span ref={ref}></span>
    }
    return (
        <>
            <Head>
                <title>About page</title>
            </Head>
            <TransitionPageEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text={"Passion Fuels Purpose! "} className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 md:order-2 md:col-span-8 flex flex-col items-start justify-start xl:col-span-4'>
                            <h2 className='mb-4 font-bold uppercase text-lg text-dark/75 dark:text-light'>Biography</h2>
                            <p className='font-medium'>- Hi, I&apos;m Isazade Elvin, a web developer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. I am always looking for
                                new and innovative ways to bring my clients&apos; visions to life.</p>
                            <p className='my-4 font-medium'>- I am Frontend Developer building websites and
                                web applications. I
                                like to code things from scratch, and enjoy bringing ideas to life in the browser.
                            </p>
                            <p className='font-medium'>- Whether I&apos;m working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                        </div>
                        <div className='col-span-3 xl:col-span-4 relative h-full rounded-2xl border-2 border-solid
                        border-dark bg-light p-8 md:col-span-8 md:order-1'>
                            <Image priority sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw" src={profilePic} alt="Profle" className='w-full rounded-2xl h-[100%] object-contain' />
                        </div>
                        <div className='col-span-2 md:order-3 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center'>
                            <div className='flex items-end flex-col justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedValues value={50} />+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                            </div>
                            <div className='flex items-end flex-col justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedValues value={24} />+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                            </div>
                            {/* <div className='flex items-end flex-col justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedValues value={1} />+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                            </div> */}
                        </div>
                    </div>
                    <Skills />
                    <Education />
                    <Experience />
                </Layout>
            </main>
        </>
    )
}

export default About