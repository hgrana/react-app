import React from 'react';

import './ImageList.css';

import ImageCard from './ImageCard';

const ImageList = ({
  images = []
}) => {
  const orderedImagesByHeight = images.sort((a, b) => b.height - a.height);

  const imageList = orderedImagesByHeight.map((image) => {
    console.log(image.height);
    return (
      <ImageCard  key={image.id} image={image} />
    )
  })

  return (
    <div className="image-list">{imageList}</div>
  )
};

export default ImageList;