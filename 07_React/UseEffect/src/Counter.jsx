import { useState } from "react";
import { useEffect } from "react";

export default function Counter() {
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let increaseCountx = () => {
        setCountx((currCount) => currCount + 1);
    };
    let increaseCounty = () => {
        setCounty((currCount) => currCount + 1);
    };

    useEffect(function printSomething() {
        console.log("this is a side-effect");
    } ,[countx]);

    return (
        <div>
            <h3>CountX = {countx}</h3>
            <button onClick={increaseCountx}>+1</button>
            <hr />
            <h3>CountY = {county}</h3>
            <button onClick={increaseCounty}>+1</button>
        </div>
    )
}