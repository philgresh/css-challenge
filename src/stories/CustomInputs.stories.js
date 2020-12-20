import React from 'react';
import { Checkbox, CustomInputs } from '../dribbbles/custom-inputs/components';

const CheckboxStory = {
  title: 'Animation/Custom Inputs',
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => (
  <div className="container" style={{ margin: '0.5rem' }}>
    <CustomInputs {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: '#F00',
};

export default CheckboxStory;
