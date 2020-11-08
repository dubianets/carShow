import React from "react";

export default function CarYear(props) {

    const y = props.year;

    return(

        <div>

        <h1>Car Year:</h1>

        <ul>

        {y.map(el => <li key={el.year}>{el.year}</li>)}

        </ul>

        </div>
)

}