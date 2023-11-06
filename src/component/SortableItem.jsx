import { FaCheckSquare } from "react-icons/fa";
import { FaRegSquareFull } from "react-icons/fa6";
import { useSortable } from "@dnd-kit/sortable"; // Importing the useSortable hook for drag-and-drop functionality
import { CSS } from "@dnd-kit/utilities"; // Importing CSS utility functions

const SortableItem = ({
  id, // Unique identifier for the item
  image, // Information about the image
  selectedImg, // An array of selected image IDs
  setSelectedImg, // A function to update the selected images
  className, // Additional CSS classes
}) => {
  const isSelected = selectedImg.includes(id); // Check if the current item is selected

  // Deconstructing properties from the useSortable hook
  const {
    attributes, // DOM attributes to apply for draggable
    listeners, // Event listeners for drag-and-drop interactions
    setNodeRef, // A reference to the DOM element
    transform, // Transform information for dragging
    transition, // CSS transition properties
    isDragging, // Indicates if the item is currently being dragged
  } = useSortable({ id });

  // Function to handle the click event on the item
  const handleClick = () => {
    if (isDragging) return; // If the item is being dragged, do nothing

    if (isSelected) {
      // If the item is already selected, remove it from the selected images array
      setSelectedImg(selectedImg.filter((imgId) => imgId !== id));
    } else {
      // If the item is not selected, add it to the selected images array
      setSelectedImg([...selectedImg, id]);
    }
  };

  return (
    <div
      ref={setNodeRef} // Set the reference to the DOM element for drag-and-drop
      style={{
        transform: CSS.Transform.toString(transform), // Apply transform for dragging
        transition, // Apply CSS transition properties
        zIndex: isSelected || isDragging ? 2 : 1, // Change z-index based on selection and dragging state
      }}
      {...attributes} // Spread DOM attributes for drag-and-drop
      {...listeners} // Spread event listeners for drag-and-drop interactions
      className={`relative rounded-2xl overflow-hidden ${className}`} // Apply CSS classes
      data-dnd-draggable // Data attribute indicating the element is draggable
    >
      {isSelected ? ( // Render content for selected items
        <>
          <FaCheckSquare
            className="absolute h-6 w-6 top-4 left-4 text-xl rounded-lg text-blue-600 cursor-pointer z-40"
            onMouseUp={handleClick} // Handle click event for selecting/deselecting
          />
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover opacity-50 transition-opacity"
          />
        </>
      ) : (
        // Render content for unselected items
        <>
          <div className="relative">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity">
              <FaRegSquareFull
                className="h-6 w-6 absolute top-4 left-4 text-xl cursor-pointer z-10 bg-white"
                onMouseUp={handleClick} // Handle click event for selecting/deselecting
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SortableItem; // Export the SortableItem component
