// import { useState } from "react";
import { PostComponent } from "./Post";


function App() {

    

    function addPost() {

    }

    return (
        <div style={{background:"lightgrey", height: "100vh",  }}>
            <button onClick={addPost}>Add Post</button>
            <div style={{display: "flex", justifyContent: "center"}}>
                
                <div>
                    <PostComponent 
                    name={"sachin"}
                    subtitle={"30 followers"}
                    time={"3m ago"}
                    image={"https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1746336689~exp=1746340289~hmac=07154c1575f9ea226aa19eb8334fe2bb161de9399d8d7701e6dc12fafc590b88&w=826"}
                    description={"How to get hired in 2025? Here are a list of challenges."}
                    />

                
                </div>
                
            </div>
        </div>
    )
 
}

export default App