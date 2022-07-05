import React, { useEffect, useState } from 'react';
import WikipediaAPI from '../api/wikipedia'

const Search = () => {
  const [ term, setTerm ] = useState('');
  const [ results, setResults ] = useState([]);
  const renderedResults = results.map((result, index) => {
    return (
      <div className='item' key={index}>
        <div className='content'>
          <div className='header'>
            {result.title}
          </div>
          <div dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
      </div>
    );
  })

  useEffect(() => {
    if (term === '') return;

    (
      async () => {
        const data = await WikipediaAPI.Search(term);
        setResults(data.query.search);
      }
    )();
  }, [ term ]);

  const onTextChange = (textValue) => {
    setTerm(textValue);
  }

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter search term:</label>
          <input
            className='input'
            value={term}
            onChange={(event) => onTextChange(event.target.value)}
          />
        </div>
      </div>
      <div className='ui celled list'>
        {renderedResults}
      </div>
    </div>
  )
}

export default Search;