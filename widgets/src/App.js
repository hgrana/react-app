import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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
      <Search />
    </div>
  )
}

export default App;
