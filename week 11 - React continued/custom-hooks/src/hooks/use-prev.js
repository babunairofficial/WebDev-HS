import { useEffect, useRef } from "react";

export const usePrev = (value) => {
    const ref = useRef();
    //useRef does not re-render anythin

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}
// it returns first, effect get called later.