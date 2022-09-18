import Link from "next/link"
import { useRouter } from "next/router"
import useTranslation from "next-translate/useTranslation";
export default function Navbar(){
    let {t} = useTranslation(); 
    let router = useRouter()

   
    return(
        <div> 
           <h1>
        
        {t("hero:title")}
       </h1>
           <ul> 
        {router.locales.map((locale , index) => (
          <li key={index} > 
          <Link href={router.asPath} locale={locale}> 
           {locale}
            </Link>
         
         </li>
        ))}
       
      </ul>
        </div>
    )
}