import { useCart } from "react-use-cart";
import Navbar from '../components/navbar'
export default function Cart(){

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if (isEmpty) return(<p>Your cart is empty</p>)
    
    return(
        <> 
            <Navbar />
            <div className="font-cartoon text-5xl pt-20 px-6">
              <p>Shoping Cart</p>

              {items.map((item) => (
                <div className="relative  h-48 w-32 p-4 pl-2 " key={item.id}>
                    <div className="absolute insert-y-0 left-0 ">
                      <img src={item.image}/>
                    </div>
                </div>
              ))}
            </div>
              
            <h1>Cart ({totalUniqueItems})</h1>
            {console.log(items)}
            <ul>
                {items.map((item) =>(
                 
                    <div key={item.name}>
                      
                    <p>{item.name}{item.quantity}</p>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button onClick={() => removeItem(item.id)}>&times;</button>
                  </div>
                ))}
            </ul>
        </>
    )
}