//fetch API

/*stage 1 - basics */
//fetch method sends a request to the http server and gets a response
//using a dummy API
// fetch("https://jsonplaceholder.typicode.com/posts/1");

//also can fetch from local json
// fetch("here.json"); 

/*stage 2 - let us create a function to call the fetch method*/
async function getRecentPost(){ 
    //made the function asynchronous. await keyword is used only in an async function
    
    //store the response received in a variable
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    // const response = await fetch("here.json"); 
    //fetch being a promise, await keyword is used.
    //await keyword ensures the execution is completed only after the promise is resolved.
    
    //additionally one can mention the request that need to be made like POST, GET, PUT, PATCH, DELETE
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method: "GET"
    });

    //fetch can return any type of data, so here we need to store it as a json data
    const data = await response.json(); 
    //response.json is also an async function, hence await is used.
    //.json() method is actually an async promise-based method.

    console.log(data);
    document.getElementById("posts").innerHTML = data.body;
}
getRecentPost();