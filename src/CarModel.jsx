import React from "react";


export default function CarModel(props){

    const m = props.model;

    return(

        <div>

            <h1>Car Model:</h1>

            <ul>

                {props.counterModel}

                {m.map(el => <li key={el.model}> {el.model}  <button onClick={props.counterModelPlus}>+</button> </li>)}

            </ul>


        </div>

    )


}