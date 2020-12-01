import React from 'react';
import Fylo from '../components/Fylo';

const FyloStory = {
  title: 'Frontend Mentor/Fylo Storage',
  component: Fylo,
  argTypes: {
    dataUsed: {
      control: { type: 'number', min: 0, max: 1000 },
    },
  },
};

const Template = (args) => <Fylo {...args} />;

export const Interconnected = Template.bind({});
Interconnected.args = {
  comment:
    'A frontend challenge incorporating gradients, a progress bar, and icon animation',
  link:
    'https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n',
};

export default FyloStory;
