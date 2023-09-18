import "./Search.scss";
import { useContext, useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { Context } from "../../../utils/context";
import { useNavigate } from "react-router-dom";

const baseURL = process.env.REACT_APP_DEV_URL;

const Search = ({ setShowSearch }) => {
    const { products } = useContext(Context);
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState();

    const showSearchResult = (str) => {

        const result = products?.data?.filter(item => {
            if (item.attributes.title.toLowerCase().search(str.toLowerCase()) !== (-1)) { return item; }
        });

        setSearchResults(result);
    };

    const onChange = (e) => {
        setSearchText(e.target.value);
        if (e.target.value.length < 3) { setSearchResults([]); } else { showSearchResult(e.target.value); }
    }


    return <div className="search-modal">
        <div className="form-field">
            <input type="text" autoFocus placeholder="Search for products" value={searchText} onChange={onChange} />
            <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
        </div>

        <div className="search-results-content">
            <div className="search-results"  >
                {searchResults && searchResults.length > 0 ? (
                    searchResults.map(item => (
                        <div className="search-item" key={item.id} onClick={() => { setShowSearch(false); navigate(`/product/${item.id}`) }}>
                            <div className="img-container">
                                <img src={baseURL + item?.attributes?.img?.data?.[0]?.attributes?.url} alt="" />
                            </div>
                            <div className="prod-details">
                                <span className="name">{item.attributes.title}</span>
                                <span className="desc">{item.attributes.desc}</span>

                            </div>
                        </div>
                    ))
                ) : ('No Result Found......')}
            </div>


        </div>
    </div >;
};

export default Search;
