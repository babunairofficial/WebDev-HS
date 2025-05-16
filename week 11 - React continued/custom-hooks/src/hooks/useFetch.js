import { useEffect, useState } from "react"

export function useFetch(url) {

    const [finalData, setfinalData] = useState({});
    const [loading, setLoading] = useState(true);

    //define the function
    async function getDetails() {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setfinalData(json);
        setLoading(false);
    }

    useEffect(() => {
        getDetails(); //called a function, which is defined above
    }, [url])

    return {
        finalData,
        loading
    }
}