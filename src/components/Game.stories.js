import React from 'react';
import Game from './ticktacktoo/Game';
import * as Board from './Board.stories';
export default {
    component:Game,
    title:'Game',
    
}

const Template = args => <Game {...args} />;
export const Default = Template.bind({});
export const Start = Template.bind({});


Default.args = {
    // history: [{
    //     squares:Array(9).fill(null),
    // }]
    squares:Array(9).fill(null),

};

