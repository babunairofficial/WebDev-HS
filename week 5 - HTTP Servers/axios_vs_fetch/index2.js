//axios
//differences between fetch API and axios for making HTTP requests
//comparison focusing syntax

//inport the axios library
const axios = require("axios");

//using fetch - does need any external library
async function mainUsingFetch () {
    const response = await fetch("https://fakestoreapi.com/products/1");
    //parse the json data
    const json = await response.json(); //access to final data by awaiting on response.json()
    //access the parsed data
    console.log(json.title.length);
}

mainUsingFetch();

//using axios - notice the differences in syntax 
async function mainUsingAxios() {
    const response = await axios.get("https://fakestoreapi.com/products/1"); //sending a get request
    //response.data 
    console.log(response.data.title.length); //direct access to the final data through response.data
}

mainUsingAxios();

/**
 * Key differences between Fetch and Axios:
 * 1. Data Access:
 *    - Fetch: Requires manual response.json() parsing
 *    - Axios: Automatically parses JSON, data available in response.data
 * 
 * 2. Error Handling:
 *    - Fetch: Only rejects on network errors
 *    - Axios: Rejects on 400-500 range status codes
 * 
 * 3. Request Configuration:
 *    - Fetch: Requires more manual configuration
 *    - Axios: Provides convenient defaults and easier configuration
 */