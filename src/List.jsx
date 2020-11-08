import React from "react";


export default function List(props){

    const ownerSN = props.el.secondName;
    const ownerFN = props.el.firstName;
    const ownerAD = props.el.addres;

    return(


        <ul>

            <h2>Owner:</h2>

            <li>
                {ownerSN}
                {ownerFN}
                {ownerAD}
              </li>


        </ul>

    )


}