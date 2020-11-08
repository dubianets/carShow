import React from "react";
import List from "./List";

export default function ListItem(props){

    const CarModel = props.el.model;
    const CarMake = props.el.make;
    const CarYear = props.el.year;
    const CarPrice = props.el.price;



    return (
<div>

            <h1>Car List:</h1>



        <li>
            <button>Byu!</button>
            {CarMake}
            {CarModel}
            {CarYear}
            {CarPrice}
        </li>


</div>

    )


}