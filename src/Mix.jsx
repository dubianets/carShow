import React from "react";
import ListItem from "./ListItem";

export default function Mix(props){

   const arr =[];

    const m = arr.push(props.el.make);
    const o = arr.push(props.el.firstName);


    return(


        <li>

            {arr}

        </li>

    )

}