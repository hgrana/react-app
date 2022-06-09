import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import Error from './Error';

class App extends React.Component{  
  state = {
    latitude: null,
    error: {
      message: ''
    }
  };
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ error: { message: err.message } })
    );
  }

  renderContent() {
    if (this.state.latitude && !this.state.error.message) {
      return <SeasonDisplay latitude={ this.state.latitude }/>
    }

    if (!this.state.latitude && this.state.error.message) {
      return <Error errorMessage={this.state.error.message}></Error>
    }
    
    return <Spinner message="Please, accept location request." />;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#root"));
