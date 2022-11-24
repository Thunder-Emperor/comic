import { Link } from "react-router-dom"

export default function({image,productname,price}){
    
    return(
        <>
           <div className="w-56 h-64 font-cartoon ">
                <Link to ={`productname`}>  
                    <img src={image} className="rounded border-2 border-black"  />
                </Link>
                <div className='text-3xl text-center '>
                    <p>{productname}</p>
                    <p>Price: {price}$</p>
                </div>
             </div>
        </>
    )
}