import { useState, useEffect } from "react";
import {
  DndContext,
  closestCorners,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import TitleBar from "../component/TitleBar";
import { FaImage } from "react-icons/fa";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImg, setSelectedImg] = useState([]);

  useEffect(() => {
    // Fetch images from the server
    fetch("http://localhost:5000/images")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  //keyboard and pointer sensors for drag and drop functionality
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Handle delete/filtering images by selected id
  const handleDelete = () => {
    let updatedImages = [...images];
    if (selectedImg.length > 0) {
      updatedImages = updatedImages.filter(
        (image) => !selectedImg.includes(image.id)
      );
      setSelectedImg([]);
    }
    setImages(updatedImages);
  };

  return (
    <DndContext collisionDetection={closestCorners} sensors={sensors}>
      <main className="section-padding bg-[#ebeef5]">
        <section className="wrapper bg-[#fefefe] divide-y-4 rounded-lg">
          <TitleBar
            onDelete={handleDelete}
            selectedImg={selectedImg}
          ></TitleBar>
        </section>
      </main>
    </DndContext>
  );
};

export default ImageGallery;
