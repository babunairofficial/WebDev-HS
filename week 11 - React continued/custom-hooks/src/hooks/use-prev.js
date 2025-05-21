import { useEffect, useRef } from "react";

export const usePrev = (value) => {
    const ref = useRef();
    //useRef does not re-render anything
    console.log("re-render happened with new value " + value);

    useEffect(() => {
        console.log("updated the ref to be " + value);
        ref.current = value;
    }, [value]);

    console.log("returned " + ref.current);
    return ref.current; //undefined
}
// it returns first, effect get called later.