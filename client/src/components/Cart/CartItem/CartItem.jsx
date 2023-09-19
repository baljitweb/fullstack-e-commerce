import "./CartItem.scss";
import { MdClose } from 'react-icons/md';

import { Context } from "../../../utils/context";
import {
    useContext
} from "react";

const baseURL = process.env.REACT_APP_DEV_URL;
const CartItems = () => {
    const { cartItems, handleCartProductQty, handleRemoveFromCart } = useContext(Context);
    console.log(cartItems);

    return <div className="cart-products">
        {cartItems?.map(item => (

            <div className="cart-product" key={item.id}>
                <div className="img-container">
                    <img src={baseURL + item?.attributes?.img?.data?.[0]?.attributes?.url} alt="" />

                </div>
                <div className="prod-details">
                    <span className="name">{item?.attributes?.title}</span>
                    <MdClose className="close-btn" onClick={() => handleRemoveFromCart(item)} />
                    <div className="qty-btn">
                        <span onClick={() => handleCartProductQty(item, 'dec')}>-</span>
                        <span>{item?.attributes?.quantity}</span>
                        <span onClick={() => handleCartProductQty(item, 'inc')}>+</span>
                    </div>
                    <div className="text">
                        <span>{item?.attributes?.quantity}</span>
                        <span>X</span>
                        <span className="highlight">&pound;{item?.attributes?.price * item?.attributes.quantity}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>;
};

export default CartItems;
