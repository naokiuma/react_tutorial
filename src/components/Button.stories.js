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


