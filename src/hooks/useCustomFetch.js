import { useState, useEffect } from 'react';

function useCustomFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function customFetch(url) {
        try{
            let response = await fetch(url);
            let rData = await response.json();
            setData(rData);
            setLoading(false);
        } catch(e) {
            setError(e);
            setLoading(true);
        }
    }

    // calling useEffect whenever url changes
    // [] run when its rendered i.e only one time
    // no 2 arg means useEffect will run everytime the component's state is changed 
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            if(url){
                customFetch(url);
            }
        }, 3000);
    } ,[url]);

    return [data, error, loading];

};

export default useCustomFetch;