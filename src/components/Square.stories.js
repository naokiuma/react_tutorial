import React from 'react';
import Square from './ticktacktoo/Square';

export default {
    component:Square,
    title:'Square',
};


const Template = args => <Square {...args} />;

export const Default = Template.bind({});
Default.args = {
    
        id:'1',
        title:'maru',
        state:'maru_state',
        value:'◯',
    
};

export const Batsu = Template.bind({});
Batsu.args ={
    
        id:"2",
        title:'batsu',
        state:'batsu',
        value:'×',
        updatedAt:new Date(),
    
};

export const Sankaku = Template.bind({});
Sankaku.args ={
    
        id:"3",
        title:'sankaku',
        state:'sankaku',
        value:'△',
        updatedAt:new Date(),
    
};