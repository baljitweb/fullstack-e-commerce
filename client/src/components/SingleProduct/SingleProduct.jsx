import "./SingleProduct.scss";

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus
} from 'react-icons/fa';

import RelatedProducts from './RelatedProducts/RelatedProducts';
import { useParams } from 'react-router-dom';
import useFetch from "../hooks/useFetch";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";

const baseURL = process.env.REACT_APP_DEV_URL;

const SingleProduct = () => {
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const { title, price, desc, categories } = data?.data?.[0].attributes || '';
    const [cartQty, setCartQty] = useState(1);
    const { handleAddToCart } = useContext(Context);

    // console.log(data?.data?.[0]);
    // console.log(data?.data?.[0].attributes);

    return <div className="single-product-main">
        <div className="layout">
            {data ? <div className="single-product-page">
                <div className="left"><img src={baseURL + data?.data?.[0].attributes?.img?.data?.[0]?.attributes?.url} alt="" /></div>
                <div className="right">
                    <span className="name">{title}</span>
                    <span className="price">&pound;{price}</span>
                    <span className="desc">{desc}</span>

                    <div className="cart-btn">
                        <div className="qty-btn">
                            <span onClick={() => cartQty > 1 ? setCartQty(cartQty - 1) : setCartQty(1)}>-</span>
                            <span>{cartQty}</span>
                            <span onClick={() => setCartQty(cartQty + 1)}>+</span>
                        </div>
                        <button className="add-to-cart" onClick={() => handleAddToCart(data.data[0], cartQty)}>
                            <FaCartPlus size={20} />
                            Add To Cart
                        </button>
                    </div>

                    <span className="divider" />
                    <div className="info-items">
                        <span className="text-bold">
                            Category:
                            <span>Headphones</span>
                        </span>
                        <span className="text-bold">
                            Share
                            <span className="social-icons">
                                <FaFacebookF size={16} />
                                <FaInstagram size={16} />
                                <FaLinkedinIn size={16} />
                                <FaPinterest size={16} />
                                <FaTwitter size={16} />
                            </span>
                        </span>
                    </div>

                </div>
            </div> : null}
            <RelatedProducts productId={id} categoryId={categories?.data?.[0]?.id} />
        </div>
    </div>;
};

export default SingleProduct;
