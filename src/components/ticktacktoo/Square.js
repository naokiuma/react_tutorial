import React from 'react';


export function Square({props,square:{title}}){
    console.log(title)
    if(title == "maru"){
        return(
            <button className = "square">
                O
            </button>
        );
    }else if(title == "batsu"){
        return(
            <button className = "square">
                X
            </button>
        );
    }

    return (
        //両側の括弧を削除
        <button className = "square" onClick = {props.onClick}>
            {props.value}
        </button>
    )
}