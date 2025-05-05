import { useState } from "react";


function App() {

    return (
        <div style={{background:"lightgrey", height: "100vh",  }}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div>
                    <div>
                        <NotificationCount />
                        <ToggleMessage />
                        <PostComponent 
                            name={"sachin"}
                            subtitle={"30 followers"}
                            time={"3m ago"}
                            image={"https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1746336689~exp=1746340289~hmac=07154c1575f9ea226aa19eb8334fe2bb161de9399d8d7701e6dc12fafc590b88&w=826"}
                            description={"How to get hired in 2025? Here are a list of challenges."}
                        />
                        
                        <br />
                    </div>
                    <div>
                    <PostComponent 
                            name={"viru"}
                            subtitle={"Promoted"}
                            
                            image={"https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1746336689~exp=1746340289~hmac=07154c1575f9ea226aa19eb8334fe2bb161de9399d8d7701e6dc12fafc590b88&w=826"}
                            description={"Learn to be explosive"}
                        />
                        <br />
                    </div>
                    <div>
                    <PostComponent 
                            name={"rahul"}
                            subtitle={20}
                            time={null}
                            image={"https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1746336689~exp=1746340289~hmac=07154c1575f9ea226aa19eb8334fe2bb161de9399d8d7701e6dc12fafc590b88&w=826"}
                            description={"Master your emotions."}
                        />
                        <br />
                    </div>
                </div>
                
            </div>
        </div>
    )
 
}

//component

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "grey", borderWidth: 1, padding: 20};

const ToggleMessage = () => {
    const [isVisible, setIsVisible] = useState(false); //state variable
    //state variable helps to re-render component whenever the variables change.

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle Message
            </button>
            {isVisible && <p>This message is conditionally rendered!</p>}
        </div>
    );
};

const NotificationCount = () => {
    const [notificationCount, setNotificationCount] = useState(0); 

    return (
        <div>
            <button onClick={() => setNotificationCount(notificationCount + 1)}>
                Notifcation Count
            </button>
            {notificationCount}
        </div>
    );
};

function PostComponent({name, subtitle, time, image, description}) {

    return <div style={style}>
        <div style={{display: "flex"}}>
            <img src={image} style={{
                width: 30,
                height: 30,
                borderRadius:20
            }} />
            <div style={{fontSize: 10, marginLeft: 10}}>
                <b>
                    {name}
                </b>
                <div>{subtitle}</div>
                {time && <div style={{display: "flex"}}>
                    <div>{time}</div>
                    <img src={"https://w7.pngwing.com/pngs/473/569/png-transparent-graphy-clock-clock-icon-angle-number-noun-project-thumbnail.png"} style={{width: 10, height: 10}} />

                </div>}
            </div>        
            
        </div>
        <div style={{fontSize: 12}}>
            {description}
        </div>
    </div>

}

export default App