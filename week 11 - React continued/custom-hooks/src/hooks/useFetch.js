import { useEffect, useState } from "react"

export function useFetch(url) {

    const [finalData, setfinalData] = useState({});

    //define the function
    async function getDetails() {
        const response = await fetch(url);
        const json = await response.json();
        setfinalData(json);
    }

    useEffect(() => {
        getDetails(); //called a function, which is defined above
    }, [url])

    return {
        finalData
    }
}