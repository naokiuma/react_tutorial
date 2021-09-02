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
        type:'label',
        state:'label01',
        updatedAt:new Date(),
    },
};

export const CheckBox = Template.bind({});
CheckBox.args = {
    label:{
        title:'チェックボックス',
        type:'check',
        state:'label02',
        updatedAt:new Date(),
    },
};

export const Required1 = Template.bind({});
Required1.args = {
    label:{
        title:'必須ラベル',
        type:'span',
        state:'label03',
        updatedAt:new Date(),
    },
};