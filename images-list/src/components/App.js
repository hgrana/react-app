import React from 'react';

import SearchBar from './SearchBar'

import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component{
  state = {
    images: [],
    error: null
  }

  onSearchSubmit = (term) => {
    unsplash
      .get('/search/photos/', {
        params: {
          query: term
        }
      })
      .then((result) => this.setState({ images: result.data.results }))
      .catch((err) => this.setState({ error: err }));
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        {this.state.images.length > 0 && `Found: ${ this.state.images.length }`}
        {this.state.error && `Error! Something went wrong: ${ this.state.error }`}

        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
