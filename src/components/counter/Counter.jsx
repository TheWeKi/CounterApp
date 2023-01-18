import './Counter.css'
import {CounterButton} from "./CounterButton";
import {useState} from "react";

export function Counter() {

    let [by, setBy] = useState(0)

    const incrementBy = (item) => {
        setBy(by + item)
    }

    const decrementBy = (item) => {
        setBy(by - item)
    }

    const resetBy = () => {
        setBy(0)
    }

    return (
        <div className="Counter">
            <span className="count"> {by} </span>
            <br/>

            <CounterButton by={1} incrementBy={incrementBy} decrementBy={decrementBy}/>
            <CounterButton by={3} incrementBy={incrementBy} decrementBy={decrementBy}/>
            <CounterButton by={5} incrementBy={incrementBy} decrementBy={decrementBy}/>

            <button className="counterButton" onClick={resetBy}>Reset</button>
        </div>
    )
}

