import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import img from "../../assets/logo.png";
import {FaFacebookF,FaTwitter} from "react-icons/fa" 
import {AiOutlineInstagram} from "react-icons/ai"
export default function Footer(){
    let {t} = useTranslation(); 
  
    return(
        <>
        <div id="page1" className="md:flex md:px-16 px-9 justify-around mt-40 py-9"> 
            <div className="md:my-0 my-16 md:w-1/3"> 
             <Image width="120px" height="50px" src={img} />
             <p className="py-4">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et obcaecati quisquam 
                id sit omnis explicabo voluptate aut placeat, soluta, nisi ea magni facere, itaque 
                incidunt modi? Magni, et voluptatum dolorem.
            </p>
            <div className="flex py-4 w-1/3 justify-around">
            <FaFacebookF className="hover:text-red-400" size="25px"/>
            <AiOutlineInstagram className="hover:text-red-400" size="25px"/>
            <FaTwitter className="hover:text-red-400" size="25px"/>
            </div>
            
            </div>
            <div className="md:my-0 my-9 md:w-1/5"> 
             <h2 className="text-xl py-2 font-bold">{t("footer:title")} </h2>
             <div className="flex justify-between "> 
                 
                    <ul> 
                        <li> {t("footer:day1")}</li>
                        <li> {t("footer:day2")}</li>
                        <li> {t("footer:day3")}</li>
                        <li> {t("footer:day4")}</li>
                        <li> {t("footer:day5")}</li>
                        <li> {t("footer:day6")}</li>
                        <li> {t("footer:day7")}</li>
                    </ul>
                
                
                <ul> 
                        <li> 9:00 - 00:00 </li>
                        <li> 9:00 - 00:00 </li>
                        <li> 9:00 - 00:00 </li>
                        <li> 9:00 - 00:00 </li>
                        <li> 9:00 - 00:00 </li>
                        <li> 9:00 - 00:00 </li>
                        <li> Closed </li>
                    </ul>
                    
             </div>
            </div>
            <div className="my-0 my-6 md:w-1/4"> 
             <h1 className="font-bold py-2 text-xl"> {t("footer:title2")}</h1>
             <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
             <input className="border-2 mt-4 w-full px-4 py-2 outline-none" placeholder={t("footer:input")}/> <br/>
             <button className="bg-red-400 mt-4 w-full hover:bg-red-500 rounded-full text-white font-semibold px-4 py-2"> {t("footer:input")}</button>
            </div>
        </div> 
        </>
    )
}