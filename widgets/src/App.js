import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
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

const options = [
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Green',
    value: 'green'
  },
  {
    label: 'Blue',
    value: 'blue'
  }
]

const App = () => {
  const [ dropdownResult, setDropdownResult ] = useState(null);

  console.log(dropdownResult);

  return (
    <div>
      <Accordion items={items} />
      <Search />
      <Dropdown
        options={options}
        label='Select a Color'
        callback={(result) => setDropdownResult(result)}
      />
    </div>
  )
}

export default App;
