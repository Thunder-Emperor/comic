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
               <div key={comic.id}>
                <div >
                    <div className="px-16 pt-16">
                        <img src={comic.image} alt="" className="w-44 " />
                    </div>
                    
                </div>
               </div>
            ))}
            
        </>
    )
}