import React, {useState} from "react"

export const PropsAndState = ({ yourName }) => {
    let [countClick, setCountClicks] = useState(0)

    const handleClick = () => {

        const newCountClicks = ++countClick
        setCountClicks(newCountClicks)
    }
    return (
        <>
            <h3>Welcome, {yourName} </h3>
            <p>{countClick}</p>
            <button onClick={(handleClick)}>Click Me</button>
        </>
    )
}