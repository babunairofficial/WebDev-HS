import { useEffect } from "react";
import { useState } from "react";

function App() {
    const [currentTab, setCurrentTab] = useState(1);
    const [tabData, setTabData] = useState({});

    useEffect(function() {
        console.log("send request to backend to get data for tab" + currentTab);
        fetch("https://dummyjson.com/todos/" + currentTab)
        .then(async res => {
            const json = await res.json();
            setTabData(json);
        });
    }, [currentTab])

    return <div>
        <button onClick={function() {
            setCurrentTab(1)
        }} style={{color: currentTab == 1 ? "red" : "black"}}>TODO #1

        </button>
        <button onClick={function() {
            setCurrentTab(2)
        }} style={{color: currentTab == 2 ? "red" : "black"}}>TODO #2

        </button>
        <button onClick={function() {
            setCurrentTab(3)
        }} style={{color: currentTab == 3 ? "red" : "black"}}>TODO #3

        </button>
        <button onClick={function() {
            setCurrentTab(4)
        }} style={{color: currentTab == 4 ? "red" : "black"}}>TODO #4

        </button>
        <br />

        {/* add the required object element */}
        {tabData.todo} 
    </div>
}

export default App