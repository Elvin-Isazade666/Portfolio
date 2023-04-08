import AnimatedText from '@/components/AnimatedText';
import HireMe from '@/components/HireMe';
import { LinkArrow } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from "../../public/images/profile/front.avif";
import TransitionPageEffect from '@/components/TransitionPageEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionPageEffect />
      <main className="flex items-center text-dark min-h-screen w-full dark:text-light">
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col gap-10'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} priority sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw" className="w-full h-auto lg:hidden md:inline-block md:w-full rounded-lg" alt='CodeBucks' />
            </div>
            <div className='w-1/2 lg:w-full lg:text-center'>
              <AnimatedText text={"Turning Vision Into Reality With Code And Design."} className= "!text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:justify-center'>
                <Link href={"/elvinResume.pdf"} target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent
                  hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                "
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"} /> </Link>
                <Link href={"mailto:elvin.isazade.2022@gmail.com"} className="ml-4 text-lg font-medium capitalize underline
                md:text-base">Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}