//install react@18.2.0 as recoil might not be compatible with the latest version of react.

import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/atoms/counter";

function App() {

    return <div>
        <RecoilRoot>
            <Buttons />
            <Counter />
            <IsEven />
        </RecoilRoot>
        
    </div>
}

function Buttons() {
    const setCount = useSetRecoilState(counterAtom);

    function increase() {
        setCount(c => c + 2)
    }

    function decrease() {
        setCount(c => c - 1)
    }

    return <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
}

function Counter() { //subscribes to the atom
    const count = useRecoilValue(counterAtom);

    return <div>
        {count}
    </div>
}

function IsEven() { //subscribes to the selector (derived state), and not to the atom
    const even = useRecoilValue(evenSelector);

    return <div>
        {even ? "Even" : "Odd"}
    </div>
}

export default App;