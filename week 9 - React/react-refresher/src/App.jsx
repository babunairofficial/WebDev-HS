// import { useState } from "react";
import { useState } from "react";
import { PostComponent } from "./Post";


function App() {
    const [ posts, setPosts ] = useState([]);

    

    //[<PostComponent>]

    const postComponents = posts.map(post => <PostComponent
        name={post.name}
        subtitle={post.subtitle}
        time={post.title}
        image={post.image}
        description={post.description}
        />)

    function addPost() {
        setPosts([...posts, {
                name: "viru",
                subtitle: "900 followers",
                time: "20m ago",
                image: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1746336689~exp=1746340289~hmac=07154c1575f9ea226aa19eb8334fe2bb161de9399d8d7701e6dc12fafc590b88&w=826",
                description: "pushing another set of post component"
        }])
        
    }

    return (
        <div style={{background:"lightgrey", height: "100vh",  }}>
            <button onClick={addPost}>Add Post</button>
            <div style={{display: "flex", justifyContent: "center"}}>
                
                <div>
                    {postComponents}

                
                </div>
                
            </div>
        </div>
    )
 
}

export default App