import Image from "next/image"
import useTranslation from "next-translate/useTranslation";
import img1 from "../../assets/hero-2.jpg"
import img2 from "../../assets/hero-1.jpg"
export default function About(){
    let {t} = useTranslation(); 
     return (
        <> 
        <div className="md:flex  px-16 py-9"> 
            <div className=" md:px-4 w-full md:w-1/2"> 
            <Image src={img1}/>
            </div>
            <div className="md:w-1/2 w-full px-1 py-4"> 
                <div>
             <spam className="text-xl text-red-400">  {t("about:title")} </spam>   
             <h1 className="text-4xl font-bold">  {t("about:title2")} </h1>
             <p className="mt-9 font-light">  {t("about:text")}</p>
             </div>
            <div className="mt-9"> 
                <h1 className="text-3xl font-normal"> {t("about:title3")} </h1>
                <div className="flex w-4/5 mt-4 justify-between"> 
                    <div className="w-48 text-red-400"> 
                    <Image src={img2}/>  {t("about:item")} </div>
                    <div className="w-48 text-red-400"><Image src={img2}/>  {t("about:item")} </div>
                    <div className="w-48 text-red-400">  <Image src={img2}/>  {t("about:item")} </div>
                </div>
            </div>
            </div>
        </div>
        </>
     )
}