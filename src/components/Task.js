import React from 'react';

export default function Task({ task:{id,title,state },onArchiveTask,onPinTask }){
    return(
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                あ
                <input
                    type="checkbox"   
                    defaultChecked={state ==='task_archived'}
                    disabled={true}
                    name="checked"
                />
            </label>
                <input type="text" value={title} readOnly={true} />

        </div>

    );
}