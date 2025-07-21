import { useRef, useState } from "react"
import { Button } from "./Buttons";

export function Otp() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    const [disabled, setDisabled] = useState(true);

    const focusNext = (nextRef) => {
        // Add null check and use setTimeout to ensure ref is ready
        setTimeout(() => {
            if (nextRef && nextRef.current) {
                nextRef.current.focus();
            }
        }, 0);
    };

    return <div className="flex justify-center">
        <SubOtpBox reference={ref1} onDone={() => {
            focusNext(ref2);
        }} />
        <SubOtpBox reference={ref2} onDone={() => {
            focusNext(ref3);
        }} />
        <SubOtpBox reference={ref3} onDone={() => {
            focusNext(ref4);
        }} />
        <SubOtpBox reference={ref4} onDone={() => {
            focusNext(ref5);
        }} />
        <SubOtpBox reference={ref5} onDone={() => {
            focusNext(ref6);
        }} />
        <SubOtpBox reference={ref6} onDone={() => {
            setDisabled(false);
        }} />

        <Button disabled={disabled}>Sign up</Button>
    </div>
}

function SubOtpBox({reference, onDone}) {
    const handleChange = (e) => {
        // Only proceed if there's a value and it's a single character
        if (e.target.value.length === 1) {
            onDone();
        }
    };
    return <div>
        <input ref={reference} onChange={handleChange} type="text" className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white"></input>

        
    </div>
}