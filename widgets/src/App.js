import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'what is react?',
    content: 'react is a js frontend library'
  },
  {
    title: 'why react?',
    content: 'because it reacts'
  },
  {
    title: '?',
    content: '!'
  }
]

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default App;
