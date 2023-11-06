import { useState, useEffect } from "react";
import {
  DndContext,
  closestCorners,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"; // Importing DndContext and related drag-and-drop functionality
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable"; // Importing sortable context and sorting strategy

import TitleBar from "../component/TitleBar"; // Importing the TitleBar component
import { FaImage } from "react-icons/fa"; // Importing the FaImage icon
import SortableItem from "../component/SortableItem"; // Importing the SortableItem component

const ImageGallery = () => {
  const [images, setImages] = useState([]); // State for storing images
  const [selectedImg, setSelectedImg] = useState([]); // State for storing selected image IDs

  useEffect(() => {
    // Fetch images from the server
    fetch("https://image-gallery-server-theta.vercel.app/images")
      .then((res) => res.json())
      .then((data) => {
        setImages(data); // Update the images state with fetched data
      });
  }, []);

  // Define sensors for drag-and-drop functionality (pointer and keyboard)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates, // Use keyboard coordinates for sorting
    })
  );

  // Handle deletion/filtering of images by selected IDs
  const handleDelete = () => {
    let updatedImages = [...images];
    if (selectedImg.length > 0) {
      updatedImages = updatedImages.filter(
        (image) => !selectedImg.includes(image.id)
      );
      setSelectedImg([]); // Clear selected images after deletion
    }
    setImages(updatedImages); // Update the images state with the filtered images
  };

  // Event handler for updating the order of items on drag end
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setImages((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex); // Update the order of items
      });
    }
  };

  return (
    <DndContext
      collisionDetection={closestCorners}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <main className="section-padding bg-[#ebeef5]">
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

export default ImageGallery; // Export the ImageGallery component
