import React from 'react';
import { Square } from './ticktacktoo/Square';
import { storiesOf } from '@storybook/react';





export default {
    component:Square,
    title:'Square',
};

const Template = args => <Square {...args} />;

export const Maru = Template.bind({});
Maru.args = {
    square:{
        id:'1',
        title:'maru',
        state:'maru',
        updatedAt:new Date(),
    },
};

export const Batsu = Template.bind({});
Batsu.args ={
    square:{
        id:"2",
        title:'batsu',
        state:'batsu',
        updatedAt:new Date(),
    },
};