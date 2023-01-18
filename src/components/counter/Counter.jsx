
function incrementCounterFunction() {
    console.log("incremented")
}

export function Counter() {
    return (
        <div className="Counter">
            <span className="count">0</span>
            <button className="counterButton" onClick={incrementCounterFunction}>Increment</button>
        </div>
    )
}