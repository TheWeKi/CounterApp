

export function CounterButton({by, incrementBy, decrementBy}) {
    return (
            <>
                <button className="counterButton" onClick={() => incrementBy(by)}> +{by} </button>
                <button className="counterButton" onClick={() => decrementBy(by)}> -{by} </button>
                <br/>
            </>
    )
}