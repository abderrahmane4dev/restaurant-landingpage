import { useState } from "react"
import Image from "next/image";
import {FaFacebookF,FaGoogle,FaTwitter} from "react-icons/fa" 
import {AiOutlineInstagram} from "react-icons/ai"
export default function ItemTeam(props){
    
    const [hidden, setHidden] = useState(false);
    
    return(
        <> 
           <div   onMouseOver={()=>setHidden(true)} onMouseLeave={()=> setHidden(false)} className=" relative text-center flex justify-center  text-center   bg-cover md:w-1/4" >
                    <div className="z-0 ">
                    <img src={props.image.src}/>
                    </div>
                    <div className="bg-white w-4/5 mx-auto z-50 absolute bottom-9  text-center"> 
                        <h1 className="font-bold text-xl"> 
                       Aoran Patel
                        </h1>
                        <h2> 
                            CEO 
                        </h2>
                        <div className={` items-center transition  bottom-0 left-0 delay-300  ease-in-out duration-300 ${hidden ? 'flex' : 'hidden'} w-1/3 py-2 justify-between mx-auto text-red-400 justify-center`}>
                        <FaFacebookF size="20px"/>
                        <AiOutlineInstagram size="20px"/>
                        <FaTwitter size="20px"/>
                        <FaGoogle size="20px"/>
                        </div>
                    </div>
                 </div>
        </>
    )
}