import React from 'react';
import Button from './Button';

export default {
    component:Button,
    title:'Button',
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    button:{
        id:'1',
        title:'defauktBtn',
        state:'btn_default',
        updatedAt:new Date(),
    },
};

export const Hoverd = Template.bind({});
Hoverd.args ={
    button:{
        id:'2',
        title:'hoverBtn',
        state:'hoverd',
        updatedAt:new Date(),
    },
};

export const btn01 = Template.bind({});
btn01.args ={
    button:{
        id:'3',
        title:'btn01',
        state:'btn01',
        updatedAt:new Date(),
    },
};

export const btn02 = Template.bind({});
btn02.args ={
    button:{
        id:'4',
        title:'btn02',
        state:'btn02',
        updatedAt:new Date(),
    },
};


