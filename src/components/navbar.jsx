import logo from '../images/comic-logo.png'
import { Link } from 'react-router-dom'
export default function navbar(){

    return(
        <>
            
        <div className='fixed   bg-white w-full'>
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
            
        </>
    )
}