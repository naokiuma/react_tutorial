import React from 'react';

export default function Button({ button:{id,title,state,type } }){

    if(type === "div"){
        return(
            <div>
                <p className="description tc">ボタンタイプ：{type}</p>
                <div className={`${state}`}>{title}</div>
            </div>
        );
    }
    return(
            <div>
                <p className="description tc">ボタンタイプ：{type}</p>
                <a className={`${state}`}><span>{title}</span></a>
            </div>
    );
}