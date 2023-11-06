import { useState, useEffect } from "react";
import {
  DndContext,
  closestCorners,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

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

  return (
    <DndContext collisionDetection={closestCorners} sensors={sensors}>
      <main className="section-padding bg-[#ebeef5]">
        <section className="wrapper bg-[#fefefe] divide-y-4 rounded-lg"></section>
      </main>
    </DndContext>
  );
};

export default ImageGallery;
