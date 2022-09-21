import Image from "next/image"
import img from "../../assets/salmon-zucchini.jpg"
import useTranslation from "next-translate/useTranslation";
export default function Specialite2(){
    let {t} = useTranslation(); 
    return(
        <> 
        <div className="bg-gray-50 py-9 px-9 md:px-16"> 
           
            <div className="md:flex items-center py-9 justify-around"> 
            <div className="md:px-16 text-center py-9 md:py-0 md:w-2/3 w-full">
              <Image  src={img}/>
               </div>
              <div className=" md:w-2/3 w-full"> 
              <div className="flex items-center ">
              <h1 className="font-black text-6xl"> 02.</h1> <hr className=" ml-9 border-3 w-48 border-black"/>
              </div>
              <div className="pl-16">
              <h1 className=" w-1/3 pt-4 text-red-400 text-2xl ">  {t("special2:title")} </h1> 
              <h1 className="text-2xl">  {t("special2:title2")} </h1>
              <p className="font-light mt-5 text-xl">  {t("special2:text")} </p>
              <h3 className="font-black text-xl">  {t("special2:price")} </h3>
              <button className="bg-red-400 mt-4 rounded-md font-bold hover:bg-red-500 px-4 py-1 text-white">  {t("special2:cta")}</button>
              </div>
              </div>
            
            </div>
          
        </div>
        </>
    )
}