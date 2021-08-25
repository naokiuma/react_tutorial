import React from 'react';

export default function Label({ label:{title,state } }){
    return(
        
        <div className="test">
        <a className={`${state}`}>{title}</a>
        </div>


    );
}