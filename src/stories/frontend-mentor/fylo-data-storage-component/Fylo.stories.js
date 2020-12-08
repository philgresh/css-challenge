import React from 'react';
import Fylo from './components/Fylo';
import './components/fylo.scss';

const FyloStory = {
  title: 'Frontend/Fylo Storage',
  component: Fylo,
  argTypes: {
    used: {
      control: { type: 'range', min: 0, max: 1000 },
    },
    capacity: {
      table: { disable: true },
    },
  },
};

const Template = (args) => <Fylo {...args} />;

export const FyloExample = Template.bind({});

FyloExample.args = {
  used: 815,
  capacity: 1000,
  comment:
    'A front-end challenge incorporating gradients, a progress bar, and icon animation',
  link:
    'https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n',
};

export default FyloStory;
