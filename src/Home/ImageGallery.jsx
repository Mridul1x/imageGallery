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
import SortableItem from "../component/SortableItem";

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

  //event handler on the DndContext provider in order to update the order of the items on drag end
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setImages((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      collisionDetection={closestCorners}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <main className="section-padding   bg-[#ebeef5]">
        <section className="wrapper bg-[#fefefe] divide-y-2 rounded-lg">
          <TitleBar
            onDelete={handleDelete}
            selectedImg={selectedImg}
          ></TitleBar>
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 px-10 py-8">
            <SortableContext
              items={images.map((image) => image.id)}
              strategy={rectSortingStrategy}
            >
              {images.map((image, index) => (
                <SortableItem
                  image={image}
                  index={index}
                  key={image.id}
                  id={image.id}
                  selectedImg={selectedImg}
                  setSelectedImg={setSelectedImg}
                  className={index === 0 ? "col-span-2 row-span-2" : ""}
                ></SortableItem>
              ))}
            </SortableContext>
            <div className="bg-gray-50 border-dashed border-gray-300 border-2 flex flex-col gap-4 items-center justify-center rounded-lg p-10 cursor-pointer">
              <FaImage className="h-7 w-7 text-gray-600" />
              <p className="text-gray-600 text-center text-lg font-medium">
                Add Images
              </p>
            </div>
          </div>
        </section>
      </main>
    </DndContext>
  );
};

export default ImageGallery;
