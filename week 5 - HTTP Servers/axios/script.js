//axios

//axios is a JavaScript library
//It is promise-based and acts as a HTTP client for NodeJs and browser

async function getRecentPost(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    //axios converts data to json by default.
    //the request GET is mentioned.
    //incases where the request is not mentioned default is GET
    
    console.log(response.data);
    
    document.getElementById("posts").innerHTML = response.data.title;
    //alternatively response.data can be stored in a variable if needed
}
getRecentPost();

async function getRemainingPosts(){
    //adding more posts using button onclick event.
    const addresponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const arr = addresponse.data;
    for(let i = 0; i < arr.length; i++){
        document.getElementById("posts").innerHTML += ("<div>" + arr[i].body + "</div>");
    }
}