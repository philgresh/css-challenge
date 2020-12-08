import React from 'react';
import CSSTable, { ASC, DESC } from './components/CSSTable';
import './components/css-table.scss';
import csv from './references/MOCK_DATA.csv';

const CSSTableStory = {
  title: 'Frontend/CSS Table',
  component: CSSTable,
  argTypes: {
    stageSort: {
      control: {
        type: 'inline-radio',
        options: [ASC, DESC],
      },
    },
    csv: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <CSSTable {...args} />;

const CSSTableExample = Template.bind({});

CSSTableExample.args = {
  csv,
  stageSort: ASC,
  comment: 'A front-end challenge incorporating CSS Grid, table sorting',
  link: 'https://dribbble.com/shots/13912846-Mapping-Attributes',
};

export default CSSTableStory;
export { CSSTableExample };
