import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';

const ProblemImages = (props) => {

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  let images = [];

  if (props.img1 !== null) images.push(props.img1)
  if (props.img2 !== null) images.push(props.img2)
  if (props.img3 !== null) images.push(props.img3)

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="50"
          height="50"
          key={index}
          style={{ margin: '2px' }}
          alt="Problem's pictures"
        />
      ))}
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  )
}

export default ProblemImages
