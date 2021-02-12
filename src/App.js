import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },

  {
    title: 'Why use React?',
    content: 'React is favorite JS libary among engineers'
  },

  {
    title: 'How to use React?',
    content: 'You use Ract by creating components'
  }
];


const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Shade of Blue',
    value: 'blue'
  },
];

export default () => {



  return (
        <div>
          <Translate />
        </div>
  );
};
