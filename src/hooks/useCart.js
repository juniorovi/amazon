import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCard = getStoredCart();
        const savedCart = [];
        for (const id in storedCard) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                /* 
                const quantity = storedCard[id];
                addedProduct.quantity = quantity; */
                addedProduct.quantity = storedCard[id];
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);
    return [cart, setCart];
}

export default useCart;