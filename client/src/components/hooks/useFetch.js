import { useState, useEffect } from "react";
import { fetchDataFromApi } from '../../utils/api';

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchDataFromApi(endpoint);
            console.log('received: ', res);
            setData(res);
        };
        fetchData();
    }, [endpoint]);

    return { data };
};

export default useFetch;