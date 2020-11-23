import React from 'react';
import Shape from './Shape';

const ShapeStory = {
  title: 'Animation/Shapes',
  component: Shape,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
};

const Template = (args) => <Shape {...args} />;

const InterconnectedSquareCircle = () => (
  <>
    <div className="square"></div>
    <div className="circle"></div>
  </>
);

export const Interconnected = Template.bind({});
Interconnected.args = {
  primary: true,
  label: 'Shape',
  className: 'interconnected',
  comment: 'Two connected geometric shapes. Simple and strong.',
  link: 'https://dribbble.com/shots/14626933-ART-BASIS-LOGO',
  children: <InterconnectedSquareCircle />,
};

export default ShapeStory;
