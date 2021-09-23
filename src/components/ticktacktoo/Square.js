import React from 'react';
import PropTypes from 'prop-types';


//defaultがないことでエラーになっていた！！！
//export default function Square(props){
// export default function Square({ squares:{id,title,state},props }){
export default function Square(props){
    console.log("squareです")
    console.log(props);
    console.log(props.square);

    
    
    if(props.square.title == "maru"){
        return(
            <button className = "square">
                O
            </button>
        );
    }else if(props.square.title == "batsu"){
        return(
            <button className = "square">
                X
            </button>
        );
    }
    else if(props.square.title == "sankaku"){
        return(
            <button className = "square">
                △
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
