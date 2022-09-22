import {AiOutlineStar} from "react-icons/ai"
import img from "../../assets/testi-bg.jpg"
import useTranslation from "next-translate/useTranslation";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import TestItem from "./testitem";
export default function Testimony(){
    const styling = {
        backgroundImage: `url('${img.src}')`,
        width: '100%',
        height: '100%',
       
    }
  
    return(
        <> 
        <div className="bg-center " style={styling}> 
        <Carousel>
      
        <TestItem/>
        <TestItem/>
        </Carousel>
        </div>
       
        </>
    )
}