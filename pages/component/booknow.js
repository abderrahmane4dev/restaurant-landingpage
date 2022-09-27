import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import img from "../../assets/reservation-bg.jpg"
export default function BookNow(){
    let {t} = useTranslation(); 
    const styling = {
        backgroundImage: `url('${img.src}')`,
        width: '100%',
        height: '100%',
       
    }
    return(
        <>
        <div id="book" style={styling} className="bg-cover py-16 my-16  h-screen z-100 bg-center"> 
        <div className="bg-white z-20 md:ml-44  -mb-36 shadow-md shadow-black py-9 md:w-1/3 w-4/5 md:mx-0 mx-auto text-center"> 
            <div className="py-9"> 
            <h3 className="text-red-400 text-xl">  {t("book:title")} </h3>
            <h1  className="font-bold text-3xl">  {t("book:title2")} </h1>
            </div>
            <div> 
             <input className="w-4/5 my-2 py-1.5 px-2 border-black border" placeholder= {t("book:ph1")}/>
             <input className="w-4/5 my-2 py-1.5 px-2 border-black border" placeholder= {t("book:ph2")}/>
             <input className="w-4/5 my-2 py-1.5 px-2 border-black border" placeholder= {t("book:ph3")}/>
             <div className="flex w-4/5 justify-between mx-auto">
             <input type="date" className="w-1/2 my-2 py-1.5 px-2 border-black border" placeholder= {t("book:ph4")}/>
             <input type="time" className="w-1/2 my-2 py-1.5 px-2 border-black border" placeholder= {t("book:ph5")}/>
             </div>
             <select className="w-4/5 my-2 py-1.5 px-2 border-black border"> 
                <option> Person</option>
                <option> 1</option>
                <option> 2</option>
                <option> 3</option>
                <option> 4</option>
             </select>
             <textarea className="w-4/5 my-2  h-44 py-1.5 px-2 border-black border" placeholder= {t("book:ph7")}/>
             <button className="bg-red-400 hover:bg-red-500 px-4 py-1 rounded-full text-white font-semibold"> {t("book:button")}</button>
            </div>
         </div>
        </div> 
        </>
    )
}