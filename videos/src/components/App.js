import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    isSearchEmpty: false
  };

  componentDidMount() {
    this.onTermSubmit('')
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response?.data?.items || [],
      selectedVideo: response.data.items[0],
      isSearchEmpty: response?.data?.items?.length === 0
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />

        {
          this.state.isSearchEmpty ? (
            <p>Sorry, no videos found!</p>
          ) : null
        }

        {
          this.state.videos.length === 0 ? (
            <p>Loading...</p>
          ) : null
        }

        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
