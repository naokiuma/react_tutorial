import React from 'react';
import PropTypes from 'prop-types';


//defaultがないことでエラーになっていた！！！
//export default function Square(props){
export default function Square({ square:{id,title,state} },props){

    console.log("squareです")
    
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
    else if(title == "sankaku"){
        return(
            <button className = "square">
                △
            </button>
        );
    }

    return (
        //両側の括弧を削除
        <button className = "square" onClick = {this.props.onClick}>
            {this.props.value}
        </button>
    )
}



//proptypesとは
//https://zenn.dev/syu/articles/95eabfa766c358
//shapeについて
//https://teratail.com/questions/146693

Square.propTypes = {
    /** Composition of the task */
    square: PropTypes.shape({
      /** Id of the task */
      id: PropTypes.string.isRequired,
      /** Title of the task */
      title: PropTypes.string.isRequired,
      /** Current state of the task */
      state: PropTypes.string.isRequired,
    }),
  };