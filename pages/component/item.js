import Image from "next/image"
export default function ItemMenu(props){
    return (
        <>
         <div className="flex  border-dashed border-b-2 items-center w-11/12 justify-evenly border-black"> 
            <div className="px-2 w-1/3 py-2" > 
              <Image className="rounded-full" src={props.picture}/>
            </div>
            <div> 
                <h1 className="font-normal text-xl"> 
                    {props.title}
                </h1>
                <p> 
                    {props.content}
                </p>
            </div>
            <div> 
                <h1 className="text-xl"> {props.price}</h1>
            </div>
         </div>
        </>
    )
}