//app level context

import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Context = createContext();

function AppContext({ children }) {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(() => { window.scrollTo(0, 0) }, [location]);
    useEffect(() => {
        console.log('cartItems: ', cartItems);
        let subTotal = 0, count = 0;
        cartItems.map(item => {
            subTotal += item.attributes.price * item.attributes.quantity;
            count += item.attributes.quantity;
        });
        setCartSubTotal(subTotal);
        setCartCount(count);
    }, [cartItems]);

    const handleAddToCart = (product, quantity) => {
        console.log({ product, quantity });
        let items = [...cartItems];
        let index = items.findIndex(item => item.id === product.id);
        console.log('index: ', index, items[index]);
        if (index !== -1) {
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);
    };

    const handleRemoveFromCart = (product) => {
        console.log('handleRemoveFromCart: ', product);
        let items = [...cartItems];
        console.log(' items : ', items);
        items = items.filter(item => item.id !== product.id);
        console.log('filtereed items : ', items);
        setCartItems(items);
    };

    const handleCartProductQty = (product, type) => {
        console.log(product);
        let items = [...cartItems];
        let index = items.findIndex(item => item.id === product.id);
        if (type === 'inc') {
            items[index].attributes.quantity += 1;

        } else {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        // items[index].attributes.productTotal = items[index].attributes.quantity * items[index].attributes.price;
        setCartItems(items);

    };

    return (
        <Context.Provider value={{
            categories, setCategories,
            products, setProducts,
            cartItems, setCartItems,
            cartCount, setCartCount,
            cartSubTotal, setCartSubTotal,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartProductQty
        }}>
            {children}
        </Context.Provider>
    );
}

export default AppContext;
