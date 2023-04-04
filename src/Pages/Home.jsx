import Navbar from '../components/navbar'
import Background from '../images/Background.jpg'
import Sauces from '../components/sauces'

export default function home(){
  return(
    <> 
        
            <Navbar  />
            <div className='  rounded overflow-hidden '>
                  <img className=' w-full h-2/3  overflow-hidden' src={Background}/>
            </div>
            
            <Sauces/>
            
            
        
    </>
  )
}