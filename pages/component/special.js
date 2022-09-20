import Image from "next/image"
import img from "../../assets/steak.jpg"
import useTranslation from "next-translate/useTranslation";
export default function Specialite(){
    let {t} = useTranslation(); 
    return(
        <> 
        <div className="bg-gray-50 px-16"> 
            <div className="w-full text-center"> 
                <spam className="text-red-400"> {t("special:title")} </spam> 
                <h2 className="text-2xl"> {t("special:title2")}</h2>
            </div>
            <div className="flex"> 
              <div className=" w-1/2"> 
              <h1 className="font-black text-6xl"> 01.</h1> <hr className="h-4 text-black divide-x-8 divide-black"/>
              <h1 className="border-t-4 border-black w-1/3 pt-4 text-red-400 text-2xl ">  {t("special:title3")} </h1> 
              <h1 className="text-2xl">  {t("special:title4")} </h1>
              <p className="font-light text-xl">  {t("special:text")} </p>
              <h3 className="font-black text-xl">  {t("special:price")} </h3>
              <button className="bg-red-400 rounded-md font-bold hover:bg-red-500 px-4 py-1 text-white">  {t("special:cta")}</button>
              </div>
              <div className="w-1/2">
              <Image src={img}/>
               </div>
            </div>
            <div> 

            </div>
        </div>
        </>
    )
}