import { createContext, useState } from "react";
import all_products from "../assets/all_products";

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length + 1; index++) {
        cart[index] = 0;
        0
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setcartItems] = useState(getDefaultCart())
    

        const addTocart = (itemId) => {
        setcartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        }
        
        const removeTocart = (itemId) => {
            setcartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
        }

        const getTotalcartItems = () => {
            let totalAmout = 0;

            for(let item in cartItems) {
                if(cartItems[item] > 0 ){
                    let itemInfo = all_products.find((product) => 
                        product.id === Number(item))
                    totalAmout += itemInfo.new_price * cartItems[item]
                }
            }
            return totalAmout;
        }

        const getTotalItems = () => {
            let totalItem = 0;
            for(const item in cartItems) {
                if(cartItems[item] > 0){
                    totalItem += cartItems[item]
                }
            }
            return totalItem;
        }

        const contextValue = {getTotalItems, getTotalcartItems, all_products, cartItems, addTocart, 
            removeTocart};
    


    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;