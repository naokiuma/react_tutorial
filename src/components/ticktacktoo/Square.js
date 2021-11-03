import React from 'react';
import PropTypes from 'prop-types';
// import styled from "styled-components";
// import renderer from 'react-test-renderer';
//import 'jest-styled-components';



//2-3任意課題のためstyle-component試す----------------------------
// const Button = styled.button`
// color:blue;
// `

// //style_componentのjest-test。ボタンカラーをsnapshotでチェックする。
// //参考 https://zenn.dev/syu/articles/0f92abf7f0b5c5
// test("the color of the component is blue", () => {
//     const tree = renderer.create(<Button />).toJSON()
//     expect(tree).toHaveStyleRule('color', 'blue')

// });

//style-component試しここまで----------------------------


export default function Square(props){
    // console.log("squareです")
    return (

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
