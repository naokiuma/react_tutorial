import React from 'react';
import Board from './ticktacktoo/Board';

//import * as SquareStories from './Square.stories';



export default {
    component:Board,
    title:'Board',
    
    // decorators:[story => <div style= {{ padding:'3rem'}}> {story()}</div>],
}

const Template = args => <Board {...args} />;
export const Default = Template.bind({});
export const Maru = Template.bind({});

export const Batsus = Template.bind({});
export const Sankaku = Template.bind({});

Default.args = {
    squares: Array(9).fill(null),
    onClick: () => {},
};

Maru.args = {
    squares: Array(9).fill('◯ですがなよよ'),
    onClick: () => {},
};

Batsus.args = {
    squares : Array(9).fill('×'),
    onClick: () => {},
};

Sankaku.args = {
    squares : Array(9).fill('△'),
    onClick: () => {},
};