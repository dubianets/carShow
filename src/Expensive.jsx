import React from "react";

export default function Expensive(props) {

    const car = props.cars;
   console.log(props.deletAll);


    return (

        <div>

            <h1>Car price:</h1>

            <ul>

                <button onClick={props.deletAll}>+</button>

                {props.counter}

                <button onClick={props.minusCounter}>restart</button>

                {car.map(el => <li key={el.price}>{el.price} <button onClick={props.deletAll}>buy!</button> </li>)}

            </ul>

        </div>
    )
}