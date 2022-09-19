import useTranslation from "next-translate/useTranslation";
import { MdVideoLibrary } from "react-icons/md";
import Image from "next/image";
import {BiMessageRounded} from "react-icons/bi"
import {IoRocketOutline} from "react-icons/io5"
import {GiMeatCleaver} from "react-icons/gi"
import img1 from "../../assets/hero-1.jpg"
import img2 from "../../assets/hero-2.jpg"
import img3 from "../../assets/hero-3.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function HeroSection(){
    
    let {t} = useTranslation(); 
    return(
        <>
        <div className="md:flex items-center px-9 md:px-16"> 
         <div className="md:w-1/2 flex flex-col justify-start "> 
             <div className="pr-16 mt-36"> 
              <h1 className="font-light text-6xl">  {t("hero:title")}</h1>
             </div>
             <div className="flex items-center mt-9">  
          <button className="bg-red-400 shadow-md shadow-red-100 capitalize text-white hover:bg-red-500 font-bold px-4 py-2 rounded-xl">  {t("hero:cta")}</button>
          <div className="flex items-center font-bold hover:text-red-400  mx-6">
          <MdVideoLibrary size="2em" className="px-0.5 hover:text-red-400"/>
          <span >  {t("hero:video")}</span>
          </div>
             </div>
             <div className="flex w-4/5 my-32 mx-auto justify-items-center justify-evenly text-center"> 
             <div > <IoRocketOutline className="hover:text-red-400 mx-auto" size="3em"/> 
             {t("hero:icon1")}
             </div>
             
             <div > <GiMeatCleaver size="3em"  className="hover:text-red-400 mx-auto" />  {t("hero:icon2")}</div>
             <div> <BiMessageRounded size="3em"  className="hover:text-red-400 mx-auto" />  {t("hero:icon3")}</div>
             </div>
         </div>
         <div className="md:w-1/2 py-auto z-0"> 
         <Carousel className="my-auto z-0">
            <Image src={img1}/>
            <Image src={img2}/>
            <Image src={img3}/>
            </Carousel>
         </div>
        </div> 
        </>
    )
}