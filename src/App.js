import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a fron end javascript framework'
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

export default () => {
  return <div>
          <Accordion items={items} />
        </div>
};
