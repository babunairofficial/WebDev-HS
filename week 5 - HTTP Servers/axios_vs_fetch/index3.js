/* making a POST requests using fetch API and axios */

//import the axios library
const axios = require("axios");

//using fetch - does need any external library
//POST request using fetch
async function mainUsingFetch () {
    const response = await fetch(
        //demo test post endpoint using PostBin
        "https://www.postb.in/1739519662645-2654930790886",
        {
            //configurations for the POST request

            method: "POST", //explicitly specify the HTTP method
            body: { //Request payload
                username: "babunair",
                password: "1234567"
            },
            headers: { //Custom headers
                "Authorization": "Bearer 007"
            }
        },
    );
    //returns a text - know upfront whether the data returned is a text or json (a drawback)
    const textData = await response.text(); //access to final data by awaiting on response.text()
    console.log(textData);
}

mainUsingFetch();


//using axios - notice the differences in syntax 
//POST request using Axios
async function mainUsingAxios() {
    //use http dump to test all informations in a request (google search http dump)
    //sending a post request
    //axios provides a dedicated .post() method
    //Arguments are separated into: URL, body, and config object
    const response = await axios.post("https://httpdump.app/dumps/dc9c2a3f-92c1-4266-a7fa-5ce9ff10a273", 
    { //body
        username: "babunair",
        password: "1234567"
    }, 
    { //configuration object 
        headers: {
            "Authorization": "Bearer 007"
        }
    }); 
    // in a get request, body is not send, but query parameters are allowed
    //response.data 
    console.log(response.data); //direct access to the final data through response.data
}

mainUsingAxios();

/**
 * Key differences between Fetch and Axios for POST requests:
 * 
 * 1. Configuration Structure:
 *    - Fetch: Single configuration object with method, body, and headers
 *    - Axios: Separate arguments for URL, body, and config
 * 
 * 2. Body Handling:
 *    - Fetch: Requires manual JSON stringification in many cases
 *    - Axios: Automatic data transformation
 * 
 * 3. Response Handling:
 *    - Fetch: Must explicitly call .text() or .json()
 *    - Axios: Automatic parsing based on Content-Type
 * 
 * 4. GET Requests:
 *    - Both support query parameters
 *    - Axios provides cleaner syntax for query params
 *    - GET requests don't include a body, but can use query parameters
 */