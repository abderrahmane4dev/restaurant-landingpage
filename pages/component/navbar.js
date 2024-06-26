import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react";

import useTranslation from "next-translate/useTranslation";
import {AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.png"
import Image from "next/image";
import * as Scroll from 'react-scroll';
export default function Navbar(){
    let {t} = useTranslation(); 
    let Linke      = Scroll.Link;
let Button    = Scroll.Button;
let Element   = Scroll.Element;
let Events    = Scroll.Events;
let scroll    = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;
    let router = useRouter()
    const [open,setOpen]=useState(false);
   
    return(
        <div className="flex w-full justify-between   px-9 md:px-16 py-4 capitalize items-center" > 
  
          <div className="md:flex  items-center md:py-0 py-5 font-semibold    hidden ">
        
           <ul className="md:flex md:bg-transparent bg-black md:text-black text-white  justify-around ">
            <li  className="px-4 hover:text-red-400"> <Linke activeClass="active" to="home" spy={true}
             smooth={true} offset={50} duration={700}>{t("navbar:item1")}</Linke> </li>
            <li className="px-4 hover:text-red-400"> <Linke activeClass="active" to="about" spy={true}
             smooth={true} offset={50} duration={700}>{t("navbar:item2")}</Linke> </li>
            <li className="px-4 hover:text-red-400"> <Linke activeClass="active" to="special" spy={true}
             smooth={true} offset={50} duration={700}>{t("navbar:item3")}</Linke>  </li>  
           </ul>
           </div>
           <div className="  w-32">
           <Image
           src={logo}
           alt="Any Text"
           layout="responsive" 
            />
            </div>
            <div className="md:flex ">
             <ul className="md:flex hidden ">
            <li className="px-4 hover:text-red-400"> <Linke activeClass="active" to="menu" spy={true}
             smooth={true} offset={50} duration={700}>{t("navbar:item4")}</Linke> </li>
            <li className="px-4 hover:text-red-400"> <Linke activeClass="active" to="team" spy={true}
             smooth={true} offset={50} duration={700}>{t("navbar:item5")}</Linke> </li>
            <li className="px-4 hover:text-red-400"> <Linke activeClass="active" to="book" spy={true}
             smooth={true} offset={50} duration={700}>{t("navbar:item6")}</Linke> </li>  
           </ul>
           <ul className="flex"> 
        
        {router.locales.map((locale , index) => (
          <li className="bg-black hover:text-red-400 text-white font-bold px-4 mx-0.5 uppercase" key={index} > 
          <Link href={router.asPath} locale={locale}> 
           {locale}
            </Link>
         </li>
        ))}
       
      </ul>
           </div>


           <div onClick={()=>setOpen(!open)} className={`text-3xl   cursor-pointer z-20 md:hidden`}>
    
    <AiOutlineMenu  className=" sticky text-black"/>
     </div>
         <div className={`absolute w-full bg-black py-8 text-2xl z-50  text-white transition-all duration-500 ease-in ${open ? 'top-40  left-0 ':'left-[-9900px] top-40'}`}> 
         <ul className="flex-col justify-end text-center   h-full  w-full ">
            <li className=" py-4  hover:text-red-400">   {t("navbar:item1")}</li>
            <li className=" py-4 hover:text-red-400">   {t("navbar:item2")}</li>
            <li className="py-4 hover:text-red-400">   {t("navbar:item3")}</li>  
            <li className="py-4 hover:text-red-400">   {t("navbar:item4")}</li>
            <li className="py-4 hover:text-red-400">   {t("navbar:item5")}</li>
            <li className="py-4 hover:text-red-400">   {t("navbar:item6")}</li>  
           </ul>
         </div>


           
        </div>
    )
}