import "./Cart.scss";
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import CartItem from './CartItem/CartItem';
import { Context } from "../../utils/context";
import { useContext } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { makePyamentRequest } from '../../utils/api';

const Cart = ({ setShowCart }) => {

    const { cartItems, cartSubTotal } = useContext(Context);
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makePyamentRequest.post('/api/orders', {
                products: cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
        } catch (error) {
            console.log(error);
        }
    };

    return <div className="cart-panel">
        <div className="opacity-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={() => setShowCart(false)}><MdClose />
                    <span className="text">Close</span>
                </span>
            </div>

            <>
                {cartSubTotal > 0 ? (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="sub-total">
                                <span className="text">Subtotal:</span>
                                <span className="text total">&pound;{cartSubTotal}</span>
                            </div>
                            <div className="button">
                                <button className="checkout-cta" onClick={handlePayment}>Checkout</button>
                            </div>
                        </div>
                    </>
                ) :

                    (<div className="empty-cart">
                        <BsCartX />
                        <span>No products in Cart</span>
                        <button className="return-cta" onClick={() => setShowCart(false)}>Return to Shop</button>
                    </div>)}
            </>
        </div>
    </div>;
};

export default Cart;
