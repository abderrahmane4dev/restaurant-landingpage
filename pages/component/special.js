import Image from "next/image"
import img from "../../assets/steak.jpg"
import useTranslation from "next-translate/useTranslation";
export default function Specialite(){
    let {t} = useTranslation(); 
    return(
        <> 
        <div className="bg-gray-50 py-9 px-9 md:px-16"> 
            <div className="w-full text-center"> 
                <spam className="text-red-400"> {t("special:title")} </spam> 
                <h2 className="text-2xl"> {t("special:title2")}</h2>
            </div>
            <div className="md:flex items-center py-9 justify-around"> 
              <div className=" md:w-2/3 w-full"> 
              <div className="flex items-center ">
              <h1 className="font-black text-6xl"> 01.</h1> <hr className=" ml-9 border-3 w-48 border-black"/>
              </div>
              <div className="pl-16">
              <h1 className=" w-1/3 pt-4 text-red-400 text-2xl ">  {t("special:title3")} </h1> 
              <h1 className="text-2xl">  {t("special:title4")} </h1>
              <p className="font-light mt-5 text-xl">  {t("special:text")} </p>
              <h3 className="font-black text-xl">  {t("special:price")} </h3>
              <button className="bg-red-400 mt-4 rounded-md font-bold hover:bg-red-500 px-4 py-1 text-white">  {t("special:cta")}</button>
              </div>
              </div>
              <div className="md:px-16 text-center py-9 md:py-0 md:w-2/3 w-full">
              <Image  src={img}/>
               </div>
            </div>
            <div> 

            </div>
        </div>
        </>
    )
}