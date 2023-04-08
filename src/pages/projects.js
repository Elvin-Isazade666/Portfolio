import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import tello from "../../public/images/projects/tello.avif";
import quiz from "../../public/images/projects/quiz.avif";
import car from "../../public/images/projects/car.avif";
import country from "../../public/images/projects/country.avif";
import expense from "../../public/images/projects/expense.avif";
import map from "../../public/images/projects/map.avif";




import { motion } from 'framer-motion';
import TransitionPageEffect from '@/components/TransitionPageEffect';

const FramerMotion = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
    return <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark
    bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
        <Link href={link} target='_blank' className='w-1/2 rounded-lg cursor-pointer overflow-hidden lg:w-full'>
            <FramerMotion src={img} alt={title} className='w-full h-auto'
                whileHover={{
                    scale: 1.05
                }}
                transition={{ duration: 0.2 }}
            />
        </Link>
        <div className='w-1/2 pl-6 flex flex-col items-start justify-between lg:w-full lg:pt-6 lg:pl-0'>
            <span className='text-xl text-primary dark:text-primaryDark font-medium xs:text-base'>{type}</span>
            <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='w-full text-left text-4xl font-bold my-2 dark:text-light sm:text-sm'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
            <div className='flex items-center mt-2'>
                <Link href={github} target='_blank' className='w-10'>
                    <GithubIcon />
                </Link>
                <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 font-semibold
                text-lg dark:bg-light dark:text-dark sm:text-base sm:px-4'>Visit Project</Link>
            </div>
        </div>
    </article>
}

const Poject = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-center rounded-2xl border border-solid border-dark
        bg-light p-6 relative flex-col dark:bg-dark dark:border-light xs:p-4'>
            <Link href={link} target='_blank' className='w-full rounded-lg cursor-pointer overflow-hidden'>
                <FramerMotion priority sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        50vw" src={img} alt={title} className='w-full h-[315.25px] object-cover'
                    whileHover={{
                        scale: 1.05
                    }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className='w-full mt-4 flex flex-col items-start justify-between'>
                <span className='text-xl text-primary dark:text-primaryDark font-medium lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='w-full text-left text-3xl font-bold my-2'>{title}</h2>
                </Link>
                <div className='flex items-center justify-between w-full mt-2'>
                    <Link href={link} target='_blank' className='underline font-semibold text-lg md:text-base'>Visit</Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
    return (
        <>
            <Head>
                <title>Project page</title>
            </Head>
            <TransitionPageEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text={"Imagination Trumps Knowledge!"} className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProjects
                                title={"Tello"}
                                summary={"This is an e-commerce site written with React"}
                                img={tello}
                                link={"https://github.com/Elvin-Isazade666/Tello"}
                                type={"Featured Project"}
                                github={"https://github.com/Elvin-Isazade666"}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Poject
                                title={"Car app"}
                                summary={"This is an car app written with React js. Firebase is used here"}
                                img={car}
                                link={"https://github.com/Elvin-Isazade666/Car-App"}
                                type={"Featured Project"}
                                github={"https://github.com/Elvin-Isazade666"}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Poject
                                title={"All countries app"}
                                summary={"This is countries app written with React js."}
                                img={country}
                                link={"https://github.com/Elvin-Isazade666/AllCountries"}
                                type={"Featured Project"}
                                github={"https://github.com/Elvin-Isazade666"}
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProjects
                                title={"Quiz App"}
                                summary={"This is a quiz app written with react js. The app consists of two parts. These are the admin and race sections. You can add, delete and edit questions"}
                                img={quiz}
                                link={"https://github.com/Elvin-Isazade666/Quiz-app"}
                                type={"Featured Project"}
                                github={"https://github.com/Elvin-Isazade666"}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Poject
                                title={"Expense tracker app"}
                                summary={"This is expense tracker app written with React js"}
                                img={expense}
                                link={"https://github.com/Elvin-Isazade666/Expense"}
                                type={"Featured Project"}
                                github={"https://github.com/Elvin-Isazade666"}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Poject
                                title={"IP Adress tracker"}
                                summary={"This is ip adress tracker written with javascript and sass"}
                                img={map}
                                link={"https://github.com/Elvin-Isazade666/Ip-address-tracker"}
                                type={"Featured Project"}
                                github={"https://github.com/Elvin-Isazade666"}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects