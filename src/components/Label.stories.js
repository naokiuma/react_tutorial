import React from 'react';
import Label from './Label';

export default {
    component:Label,
    title:'Label',
};

const Template = args => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
    label:{
        title:'カテゴリー',
        state:'label01',
        updatedAt:new Date(),
    },
};