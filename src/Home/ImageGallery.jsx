import { useState, useEffect } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
 

  useEffect(() => {
    // Fetch images from the server
    fetch("http://localhost:5000/images")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  return (
   <div>{images.length}</div>
  );
};

export default ImageGallery;
