import React from 'react';
import Fylo from '../components/Fylo';
import './fylo.scss';

const FyloStory = {
  title: 'Frontend Mentor/Fylo Storage',
  component: Fylo,
  argTypes: {
    used: {
      control: { type: 'number', min: 0, max: 1000 },
    },
  },
};

const Template = (args) => <Fylo {...args} />;

export const FyloExample = Template.bind({});

FyloExample.args = {
  used: 815,
  capacity: 1000,
  comment:
    'A frontend challenge incorporating gradients, a progress bar, and icon animation',
  link:
    'https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n',
};

export default FyloStory;
