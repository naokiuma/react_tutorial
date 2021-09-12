import React from 'react';

export default function Label({ label:{title,state,type } }){
    if(type=="check"){
        return(
            <div class="tc">
                <p className="description tc">ボタンタイプ：{type}</p>
                <label class="check-box" for="check01">
                    <input type="checkbox" id="check01" />
                    <span class="text">たけのこの里</span>
                </label>
            </div>
        );

    }

    if(type="span"){
        return(
            <div class="tc">
                <p className="description tc">ボタンタイプ：{type}</p>
                <span class="required_label">必須</span>
            </div>
        )
    }

    return(
        
        <div className="labels">
            <a className={`${state}`}>{title}</a>
        </div>

    );
}