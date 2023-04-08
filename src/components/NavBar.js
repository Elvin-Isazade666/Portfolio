import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons';
import Logo from './Logo';
import { motion } from 'framer-motion';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import {BsFacebook, BsInstagram} from "react-icons/bs";


const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return <Link href={href} className={`${className} relative group`}>
        {title}
        <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}>
            &nbsp;
        </span>
    </Link>
}

const CustoMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href);
    }
    return <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
        {title}
        <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark`}>
            &nbsp;
        </span>
    </button>
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(prevState => !prevState);
    }
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative 
        z-10 lg:px-16 md:px-12 sm:px-8'>
            <button className='flex-col justify-center items-center h-[19px] hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light rounded-sm h-0.5 w-6 block -translate-y-1 transition-all duration-300 ease-out
                ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}></span>
                <span className={`bg-dark dark:bg-light rounded-sm h-0.5 my-0.5 w-6 block transition-all duration-300 ease-out
                ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`bg-dark dark:bg-light rounded-sm h-0.5 w-6 block translate-y-1 transition-all duration-300 ease-out
                ${isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"}`}></span>
            </button>
            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href={"/"} title={"Home"} className="mr-4" />
                    <CustomLink href={"/about"} title={"About"} className="mx-4" />
                    <CustomLink href={"/projects"} title={"Projects"} className="mx-4" />
                    {/* <CustomLink href={"/articles"} title={"Articles"} className="ml-4" /> */}
                </nav>
                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href={"https://twitter.com/elvin_isazade"} target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3">
                        <TwitterIcon />
                    </motion.a>
                    <motion.a href={"https://github.com/Elvin-Isazade666"} target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
                        <GithubIcon />
                    </motion.a>
                    <motion.a href={"https://www.linkedin.com/in/elvin-isazade-171918225/"} target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href={"https://www.facebook.com/profile.php?id=100079127442003"}
                        target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
                        <BsFacebook size={24} color='#0a66c2' />
                    </motion.a>
                    <motion.a href={"https://www.instagram.com/elvin66613/"} target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3">
                        <BsInstagram size={24} color=' #F56040' />
                    </motion.a>
                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={
                        `ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`
                    }>
                        {
                            mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                        }
                    </button>
                </nav>
            </div>
            {
                isOpen ? (
                    <motion.div
                    initial={{
                        scale:0,
                        opacity:0,
                        x:"-50%",
                        y:"-50%"
                    }}
                    animate= {{
                        scale:1,
                        opacity:1
                    }}
                    className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2
            -translate-y-1/2 bg-dark/90 dark:bg-light/75 z-30 rounded-lg py-32 backdrop-blur-md'>
                        <nav className='flex flex-col items-center justify-center'>
                            <CustoMobileLink href={"/"} title={"Home"} className="" toggle={handleClick} />
                            <CustoMobileLink href={"/about"} title={"About"} className="" toggle={handleClick} />
                            <CustoMobileLink href={"/projects"} title={"Projects"} className="" toggle={handleClick} />
                            {/* <CustoMobileLink href={"/articles"} title={"Atricles"} className="" toggle={handleClick} /> */}
                        </nav>
                        <nav className='flex items-center justify-center flex-wrap mt-2'>
                            <motion.a href={"/"} target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3 sm:mx-1">
                                <TwitterIcon />
                            </motion.a>
                            <motion.a href={"/"} target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3
                            rounded-full bg-light dark:bg-dark sm:mx-1">
                                <GithubIcon />
                            </motion.a>
                            <motion.a href={"/"} target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3 sm:mx-1">
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a href={"/"} target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3 sm:mx-1">
                                <PinterestIcon />
                            </motion.a>
                            <motion.a href={"/"} target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3 sm:mx-1">
                                <DribbbleIcon />
                            </motion.a>
                            <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={
                                `ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`
                            }>
                                {
                                    mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                                }
                            </button>
                        </nav>
                    </motion.div>
                ) : null
            }
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar