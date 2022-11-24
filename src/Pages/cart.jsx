import { useCart } from "react-use-cart";
import logo from '../images/comic-logo.png';
import { Link } from "react-router-dom";
import Navbar from '../components/navbar';

export default function Cart(){

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
    } = useCart();

    if (isEmpty) return( <div className='fixed   bg-white w-full'>
    <div className='flex'>

      <img src={logo} alt="logo" className='h-14' />
      <nav className=' font-vtc  text-4xl pt-1'>
        <div className='flex items-center font-comic pl-4 pt-2  '>
            <Link to={`/`} className=''>Home</Link> 
            <Link to={`/cart`} className="pl-4">Cart</Link>
        </div>
      </nav>
    </div>
  </div>)
    
    return(
        <> 
            <Navbar/>
            <div>
            <div className="pt-20">
                    <div className="font-motley text-4xl pl-4 border-b-2">
                       Shopping cart
                    </div>
                    

                    {items.map((item)=> (
                        <div key={item.id}>
                            <div className="flex sm:grid  pt-4 pl-4  border-b-2 ">
                              <div className="grid grid-cols-3 gap-8">  
                                  <div className="">
                                    <div className="">
                                        <img className="object-cover w-28 border-2 h-32 border-black" src={item.image} />
                                    </div>
                                    <div>
                                      <h1 className=" text-md font-motley">{item.name}</h1>
                                    </div>
                                </div>
                                <div className="">
                                  <div className='w-28 pt-10 space-x-1'>
                                      <button className='hover:bg-cyan-500 p-2 border-2 border-black' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                      <button className='bg-cyan-500 p-2 border-2 border-black'>{item.quantity}</button>
                                      <button className='p-2 hover:bg-cyan-500 border-2 border-black' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                  </div>
                                </div>
                                <div className=" text-lg font-motley pt-10 ">
                                        &#x20B9;
                                    <label className="inline-block p-2 static font-semibold">{item.quantity * item.price}</label>
                                </div>
                              </div>
                            </div>
                        </div>  
                    ))}
                    <div className="flex pl-36 lg:pl-[872px] capitalize text-lg font-motley pt-2 grid-cols-2">
                                <h1 className="">total price:</h1>
                                <h1 className="pl-4 lg:pl-16">&#x20B9; {cartTotal}</h1>
                    </div>
                    <div className="text-center px-16 space-y-4 lg:pl-[550px] py-10">
                    <div className="group relative inline-block focus:outline-none " >
                            <span
                              className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-cyan-500 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                            ></span>
                            <button
                              className="relative inline-block border-2 border-current px-8 py-3 text-lg font-bold tracking-widest text-black group-active:text-opacity-75">
                              Checkout
                            </button>
                        </div>
                      </div>
                </div>
            </div>
        </>
    )
}