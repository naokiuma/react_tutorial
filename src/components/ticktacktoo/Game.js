import React from 'react';
import Board from './Board';




export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            history:[{
                squares:Array(9).fill(null),
            }],
            stepNumber:0,
            xIsNext:true
        }
        console.log('thisstateです');
        console.log(this.state);
    }

    handleClick(i){
        console.log('stepnumber:' + this.state.stepNumber)
        const history = this.state.history.slice(0,this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squaresCopy =　current.squares.slice();//sliceは、引数を渡さない場合コピーする
        if(calculateWinner(squaresCopy) || squaresCopy[i]){
            console.log('勝負はついている');
            return;
        }
        squaresCopy[i] = this.state.xIsNext? 'X' : 'O';

        this.setState({
            history:history.concat(
                [{ squares: squaresCopy}]
            ),
            stepNumber:history.length,
            xIsNext:!this.state.xIsNext,
        })
        console.log("今の盤面のヒストリー");
        console.log(this.state.history);
    }


    jumpTo(step){
        this.setState({
            stepNumber:step,
            xIsNext: (step % 2) === 0,

        });
    }


    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        //メモ2-3クイズ
        //console.log = jest.fn().mockImplementation(() => {})

        console.log("proops")
        console.log(this.props);
        console.log("historyだよ")
        console.log(history);
        

        //履歴
        const moves = history.map( (step,move) => {
            console.log('move:' + move);
            console.log("ですがなお")
            const desc = move ?
            'Fot to move #' + move :
            'go to game start';
            return (//手数のとこ。mapで繰り返し描写する
                <li key={move}>
                    <button onClick={ () => this.jumpTo(move)}>{ desc }</button>
                </li>
            );
        })

        let status;
        if(winner){
            status = 'Winner: ' + winner;
        }else{
            status = '次のplayer: ' + (this.state.xIsNext ? 'X' : 'O');
        }
    
        
        return (
            <div className="game game_wrap">
                <div className="game-board">
                <Board
                
                    squares={current.squares} //デフォルト
                    //squares={this.props.squares}
                    onClick={(i) => this.handleClick(i)}
    
                />
                </div>
                <div className="game-info">
                <div>ステータスは{ status }です</div>
                <ul>{ moves }</ul>
                </div>
            </div>
            );
        
        
    }
  }



  //ゲームの判定
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
