import Navbar from '../components/navbar'
import Background from '../images/back.jpg'
import Sauces from '../components/sauces'
import Slide from '../components/slide'

export default function home(){
  return(
    <> 
        
            <Navbar  />
            <div className=' pt-16  rounded overflow-hidden '>
                  <img className=' w-full h-2/3 overflow-hidden' src={Background}/>
            </div>
            
            <Sauces/>
            
            
        
    </>
  )
}