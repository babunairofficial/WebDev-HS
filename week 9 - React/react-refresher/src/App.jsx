

function App() {

    return (
        <div style={{background:"lightgrey", height: "100vh",  }}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div>
                    <div>
                        <PostComponent />
                        <br />
                    </div>
                    <div>
                        <PostComponent />
                        <br />
                    </div>
                    <div>
                        <PostComponent />
                        <br />
                    </div>
                </div>
                
            </div>
        </div>
    )
 
}

//component

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "grey", borderWidth: 1, padding: 20};

function PostComponent() {

    return <div style={style}>
        <div style={{display: "flex"}}>
            <img src={"https://sdmntprwestus.oaiusercontent.com/files/00000000-ca44-6230-8e43-f4eb7245c9e9/raw?se=2025-05-02T17%3A56%3A04Z&sp=r&sv=2024-08-04&sr=b&scid=628a6bbc-ac2d-5703-a524-5b69dcc84e13&skoid=3f3a9132-9530-48ef-96b7-fee5a811733f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-02T02%3A48%3A05Z&ske=2025-05-03T02%3A48%3A05Z&sks=b&skv=2024-08-04&sig=w54wRymPgrtwdQHpVOI5lHKV3/MIbq1amGZ6H3E2/F8%3D"}  style={{
                width: 20,
                height: 20,
                borderRadius:20
            }} />
            <div style={{fontSize: 10, marginLeft: 10}}>
                <b>
                    100xdevs
                </b>
                <div>26,748 followers</div>
                <div>12m</div>
            </div>        
            
        </div>
        <div style={{fontSize: 12}}>
            What to know how to win big? Check out how these folks won $6000 in bounties.
        </div>
    </div>

}

export default App