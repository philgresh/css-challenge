import React from 'react';
import { Button } from './Button';

const ButtonStory = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
};

const addClassnameOnClick = (id, className, duration = 2000) => {
  const button = document.getElementById(id);

  button.classList.add(className);

  setTimeout(() => {
    button.classList.remove(className);
  }, duration);
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Trash = Template.bind({});
Trash.args = {
  size: 'large',
  label: 'Delete Item',
  className: 'icon delete-item',
  onClick: () => addClassnameOnClick('delete-item', 'notext'),
  id: 'delete-item',
};

export default ButtonStory;
