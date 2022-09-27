import Image from "next/image"
import { useState } from "react"
import useTranslation from "next-translate/useTranslation";
import img from "../../assets/chef-1.jpg"
import img2 from "../../assets/chef-2.jpg"
import img3 from "../../assets/chef-3.jpg"
import ItemTeam from "./teamItem"
export default function Team(){
  
    let {t} = useTranslation(); 
    return(
        <>
        <div className="py-9 "> 
            <div className="w-full text-center"> 
                <spam className="text-red-400"> {t("team:title")} </spam> 
                <h2 className="text-2xl font-bold"> {t("team:title2")}</h2>
            </div>
            <div className="flex relative md:flex-row content-between items-center flex-col py-9 justify-around"> 
                <ItemTeam image={img}/>
                <ItemTeam image={img2}/>
                <ItemTeam image={img3}/>
            </div>

        </div> 
        </>
    )
}