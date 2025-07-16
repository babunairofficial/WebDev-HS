function Button({disabled, children, onClick}) {
    return (
        <>
            <span onClick={onClick} className={`px-32  py-8 rounded-2xl text-4xl text-white cursor-pointer ${disabled ? "bg-gray-400" : "bg-green-400"}`}>
                {children}
            </span>
        </>
    )

}
export {Button};
// Using named export instead of default export for consistency with import syntax
// and to allow for potential future exports from this module