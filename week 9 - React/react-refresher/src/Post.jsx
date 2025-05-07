const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

export function PostComponent({name, subtitle, time, image, description}) {
    return <div style={style}>
        <div style={{display: "flex"}}>
            <img src={image}  style={{
                width: 30,
                height: 30,
                borderRadius: 20
            }} />
            <div style={{fontSize: 10, marginLeft: 10}}>
                <b>
                    {name}
                </b>
                <div>{subtitle}</div>
                {(time != undefined) ? <div style={{display: 'flex'}}>
                    <div>{time}</div>
                    <img src={"https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1746336689~exp=1746340289~hmac=07154c1575f9ea226aa19eb8334fe2bb161de9399d8d7701e6dc12fafc590b88&w=826"} style={{width: 12, height: 12}} />
                </div> : null}
            </div>            
        </div>
        <div style={{fontSize: 12}}>
            {description}
        </div>
    </div>
}
