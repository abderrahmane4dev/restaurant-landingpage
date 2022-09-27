import Image from "next/image"
import img from "../../assets/breakfast-1.jpg"
import useTranslation from "next-translate/useTranslation";
import ItemMenu from "./item";
export default function Menu(){
    let {t} = useTranslation(); 
    let title1 = t("menu:tit") ; 
    let text = t("menu:text") ; 
    let price = t("menu:price") ; 
    return(
        <>
        <div id="menu" className="md:px-16 px-9 flex flex-col items-center py-9 "> 
        <div className="w-full text-center"> 
                <spam className="text-red-400"> {t("special:title")} </spam> 
                <h2 className="text-2xl"> {t("menu:m")}</h2>
            </div>
        <div className="md:flex w-full xl:w-auto py-12"> 
             <div className="py-6  md:py-0"> 
                <div className="text-center"> 
                   <h1 className="text-2xl font-normal ">{t("menu:title")} </h1>
                </div>
                <div> 
                    <ItemMenu picture={img} title={title1} content={text}  price={price} />
                    <ItemMenu picture={img} title={title1} content={text}  price={price} />
                    <ItemMenu picture={img} title={title1} content={text}  price={price} />
                </div>
             </div>

             <div className="py-6 md:py-0"> 
                <div className="text-center"> 
                   <h1 className="text-2xl font-normal ">{t("menu:title")} </h1>
                </div>
                <div> 
                    <ItemMenu picture={img} title={title1} content={text}  price={price} />
                    <ItemMenu picture={img} title={title1} content={text}  price={price} />
                    <ItemMenu picture={img} title={title1} content={text}  price={price} />
                </div>
             </div>


             <div className="py-6 md:py-0"> 
                <div className="text-center"> 
                   <h1 className="text-2xl font-normal ">{t("menu:title")} </h1>
                </div>
                <div> 
                    <ItemMenu picture={img} title={title1} content={text}  price={price} />
                    <ItemMenu picture={img} title={title1} content={text}  price={price} />
                    <ItemMenu picture={img} title={title1} content={text}  price={price} />
                </div>
             </div>
            
        </div>  
        </div> 
        </>
    )
}