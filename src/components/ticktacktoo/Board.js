import React from 'react';
import Square from './Square';


export default function Board({squares,onClick}){

    console.log("board開始")
    console.log(squares)
    const renderSquare = (i) =>{
        return <Square 
        value={squares[i]}
            //React では、イベントを表す props には on[Event] という名前、
            //イベントを処理するメソッドには handle[Event] という名前を付けるのが慣習となっています。
            onClick={() => onClick(i)}
            />;
    }
        
    return (
    <div>
        <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        </div>
        <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        </div>
        <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        </div>
    </div>
    );
    
   



}
