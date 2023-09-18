import "./Products.scss";
import Product from './../Products/Product/Product';

const Products = ({ headingText, products }) => {
    // console.log(products);
    return <div className="products-container">
        <div className="sec-heading">{headingText}</div>
        <div className="products">
            {products ? products.data.map((item) => (

                <Product key={item.id} id={item.id} data={item.attributes} />
            ))
                : 'There is no product to show'
            }
            {/* <Product />
            <Product />
            <Product />
            <Product /> */}
        </div>
    </div>;
};

export default Products;
