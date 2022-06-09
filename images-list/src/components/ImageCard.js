import React from 'react';

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', () => {
      // console.log(this.imageRef.current.clientHeight);
    });
  }

  render() {
    const { urls, alt_description } = this.props.image;

    return (
      <img
        ref={this.imageRef}
        src={urls.regular}
        alt={alt_description}
      />
    );
  }
}
