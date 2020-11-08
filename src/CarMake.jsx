import React from "react";

export default function CarMake(props){

    const m = props.make;

    return(

        <div>

        <h1>Car Make:</h1>

            <ul>

                {props.counterList}
                <button onClick={props.refreshSetCounterList}>refresh</button>

                {m.map(el => <li key={el.make}> {el.make}<button onClick={props.plusSetCounterList}>Push</button> </li>)}

            </ul>



        </div>

    )


}