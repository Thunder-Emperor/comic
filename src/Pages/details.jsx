import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import Navbar from '../components/navbar'
import data from "../data";
import { Link } from "react-router-dom";
export default function Details(){
    const {comicName} = useParams();
    const {addItem} = useCart();

    return(
        <>
           
           <Navbar/>
            { data.filter( comic => comic.name === comicName).map((comic) =>(
               <div key={comic.id} className='px-8 pt-20 '>
                <div className="flex justify-center h-96">

                   <img className=" " src={comic.image}/>
                </div>
                   <div className="space-y-0.5">
                      
                        <h1 className="font-motley text-3xl">{comic.name}</h1>
                        <p className="space-x-1 leading-4 font-sans text-xs">{comic.description}</p>
                    
                        <div className=" leading-7">
                            <p className="font-motley text-2xl">Price: {comic.price}</p>                 
                            <div
                            className="group relative inline-block focus:outline-none "
                        >
                            <span
                              className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-cyan-500 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                            ></span>
                            <Link
                              className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                              to={`/cart`}
                              onClick={ () => addItem(comic)}
                            >
                              Add to Cart
                            </Link>
                        </div>
                        </div>
                    </div>
                    
                    
               </div>
            ))}
            
        </>
    )
}