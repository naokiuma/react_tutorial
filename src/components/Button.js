import React from 'react';

export default function Button({ button:{id,title,state },Hoverd }){
    return(
        <div className={`list-item ${state}`}>
            <a className={`${state}`}><span>{title}</span></a>

        </div>

    );
}