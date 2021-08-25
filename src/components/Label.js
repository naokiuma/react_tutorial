import React from 'react';

export default function Label({ label:{title,state } }){
    return(
        
        <a className={`${state}`}>{title}</a>


    );
}