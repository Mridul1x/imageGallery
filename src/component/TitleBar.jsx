import { FaCheckSquare } from "react-icons/fa"; // Importing the FaCheckSquare icon

const TitleBar = ({ selectedImg, onDelete }) => {
  // Function to handle deletion of selected images
  const handleDelete = () => {
    onDelete(); // Call the onDelete function
  };

  return (
    <div>
      {selectedImg?.length > 0 ? ( // Conditional rendering based on the number of selected images
        <div className="px-10 py-5 flex items-center justify-between">
          {/* Selected Files */}
          <h1 className="text-lg md:text-2xl font-bold flex items-center">
            <span className="mr-2 text-blue-600">
              <FaCheckSquare></FaCheckSquare>{" "}
              {/* Render the FaCheckSquare icon for selected files */}
            </span>
            <span>{selectedImg?.length} Files Selected</span>{" "}
            {/* Display the number of selected files */}
          </h1>
          {/* Delete Button */}
          <div>
            <button
              onClick={handleDelete} // Attach a click event handler for deleting files
              className="text-lg md:text-2xl font-bold text-red-600"
            >
              Delete files
            </button>
          </div>
        </div>
      ) : (
        // Default Header
        <h1 className="px-10 py-5 font-bold text-lg md:text-2xl divide-slate-700">
          Gallery
        </h1>
      )}
    </div>
  );
};

export default TitleBar; // Export the TitleBar component
