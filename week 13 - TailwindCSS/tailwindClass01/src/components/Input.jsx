export function Input({type, placeholder, onClick}) {
    return (
        <>
            <span onClick={onClick} className={`px-2  py-2 m-4 text-4xl text-white cursor-pointer bg-cyan-800 `}>
                <input type={type} placeholder={placeholder} className="outline-none bg-cyan-800 p-2 rounded-4xl"/>
            </span>
        </>
    )

}
