import {AiOutlineStar} from "react-icons/ai"
import useTranslation from "next-translate/useTranslation";
export default function TestItem(){
    let {t} = useTranslation(); 
    return(
        <>
            <div className="text-white md:px-16 px-9 text-center py-24" > 
            <h2 className="text-red-400">
            {t("testimony:title1")} 
            </h2>
                <h1 className="font-black text-4xl"> 
                {t("testimony:title2")} 
                </h1>
                <AiOutlineStar className="mx-auto my-4"  size="70px"/>
                <p className="font-light py-4 md:px-16 text-2xl"> 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                </p>
             
                <h1 className="text-red-400 py-2 font-bold text-xl"> 
                John Doe
                </h1>
                <h2 className=" py-2 font-bold text-xl"> 
                {t("testimony:title3")} 
                </h2>
              
            </div>
        </>
    )
}