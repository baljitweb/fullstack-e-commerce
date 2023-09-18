import "./Product.scss";
import { useNavigate } from "react-router-dom";

const baseURL = process.env.REACT_APP_DEV_URL;

const Product = ({ id, data }) => {
    const navigate = useNavigate();

    return <div className="product-card" onClick={() => { navigate(`/product/${id}`) }}>
        <div className="thumbnail">
            <img src={baseURL + data.img.data[0].attributes.url} alt={data.desc} />
        </div>
        <div className="product-details">
            <span className="name">{data.title}</span>
            <span className="price">&pound;{data.price}</span>
        </div>
    </div>;
};

export default Product;
