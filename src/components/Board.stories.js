import React from 'react';
import Board from './ticktacktoo/Board';
import * as SquareStories from './Square.stories';
import { Default } from './Task.stories';


export default {
    component:Board,
    title:'Board',
    decorators:[story => <div style= {{ padding:'3rem'}}> {story()}</div>],
}

const Template = args => <Board {...args} />;

export const maruGame = Template.bind({});
maruGame.args = {
    title:'maru',
    marus:[
        { ...SquareStories.Maru.args.square, id: '1', title: 'maru 1' },
        { ...SquareStories.Maru.args.square, id: '2', title: 'maru 2' },
        { ...SquareStories.Maru.args.square, id: '3', title: 'maru 3' },
        { ...SquareStories.Maru.args.square, id: '4', title: 'maru 4' },
        { ...SquareStories.Maru.args.square, id: '5', title: 'maru 5' },
        { ...SquareStories.Maru.args.square, id: '6', title: 'maru 6' },
    ],

};