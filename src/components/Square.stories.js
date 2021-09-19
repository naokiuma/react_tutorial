import React from 'react';
import Square from './ticktacktoo/Square';

export default {
    component:Square,
    title:'Square',
};


const Template = args => <Square {...args} />;

export const Default = Template.bind({});
Default.args = {
    square:{
        id:'1',
        title:'maru',
        state:'maru',
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

export const Sankaku = Template.bind({});
Sankaku.args ={
    square:{
        id:"2",
        title:'sankaku',
        state:'sankaku',
        updatedAt:new Date(),
    },
};