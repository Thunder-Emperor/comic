import { Link } from "react-router-dom";
import logo from "../images/comic-logo.png";

export default function EmptyCart() {
    return(
        <>
            <div className="font-mono">
                <div className='fixed   bg-white w-full shadow-md shadow-cyan-500'>
                    <div className='flex'>
                    <img src={logo} alt="logo" className='h-14' />
                        <nav className=' font-vtc  text-4xl pt-1'>
                            <div className='flex items-center font-comic pl-4 pt-2  '>
                                <Link to={`/`} className=''>Home</Link> 
                                <Link to={`/cart`} className="pl-4">Cart</Link>
                            </div>
                        </nav>
                    </div>
                </div>  
            </div>
             <div className="py-10 pt-28 bg-white-400 w-screen flex-auto">
                  <div
                      className="mx-auto my-auto block p-10  border-2 border-black bg-white-900  shadow-[0_4px_0_0_rgba(0,0,0,1)] w-max w-screen flex-auto"
                      aria-modal="true"
                      aria-label="Item added to your cart"
                      role="dialog"
                      tabIndex="-1"
                  >
                      <div className="flex items-start justify-between">
                          <h2 className="flex items-center pb-2 text-gray-700">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                              </svg>
                              <span className="ml-2 text-sm"> Your cart is empty </span>
                          </h2>
                      </div>
                          
                      <div className="text-center space-y-4 pt-4">
                        <Link
                          to="/"
                          className="capitalize block w-full p-4 text-sm font-medium  bg-cyan-500 ring-2 ring-black"
                        >
                          go back to shopping
                        </Link>
                      </div>
                  </div>
              </div> 
          </>
    )
}