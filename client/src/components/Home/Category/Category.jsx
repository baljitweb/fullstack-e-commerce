import "./Category.scss";
// import cat1 from '../../../assets/category/cat-1.jpg';
import { useNavigate } from "react-router-dom";

const baseURL = process.env.REACT_APP_DEV_URL;
const Category = ({ categories }) => {
    const navigate = useNavigate();

    return (<div className="shop-category">
        <div className="categories">
            {categories && categories?.data && categories.data.map((item) => (

                <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>
                    id: {item.id}<br />
                    url : {item.attributes.img.data.attributes}
                    <img src={baseURL + item.attributes.img.data[0].attributes.url} alt="" />
                </div>
            ))}
            {/* <div className="category">
                <img src={cat1} alt="" />
            </div>
            <div className="category">
                <img src={cat1} alt="" />
            </div>
            <div className="category">
                <img src={cat1} alt="" />
            </div> */}
        </div>
    </div>);
};

export default Category;
