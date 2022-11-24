import data from '../data'
import { Link } from 'react-router-dom'

export default function sauces(){
    return(
        <>
            <div>
                <span className="inline-block w-12 h-1 bg-black"></span>
                <p className='font-cartoon text-5xl text-black px-3 font-comic font-bold'>Comics</p>
            </div> 
            <div className='pl-12 mt-8 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8'>
            {data.map((comic) => (
            <Link
            to={`/comics/${comic.name}`}
            key={comic.id}
            className="block font-vtc"
        >
            
            <img
                alt="Trainer Product"
                
                src={comic.image}
                className="border-2 border-black object-cover w-5/6 -mt-3 h-80 rounded"
            />
             
                <h5 className="uppercase font-bold px-px mt-4 text-3xl text-black/90 hover:fo">
                    {comic.name}
                </h5>
                <div className="px-px flex products-center justify-between mt-4 font-bold">
                    <p className="text-lg">
                        ₹10.00
                    </p>
                </div>
        </Link>
            
            
            ))}
            </div>
        </>
    )
}