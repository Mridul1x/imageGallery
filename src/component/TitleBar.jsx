import { FaCheckSquare } from "react-icons/fa";

const TitleBar = ({ selectedImg }) => {
  return (
    <div>
      <div>
        {selectedImg?.length > 0 ? (
          <div className="px-10 py-5 flex items-center justify-between">
            {/* Selected Files */}
            <h1 className="text-xl font-bold flex items-center">
              <span className="mr-2 text-blue-600">
                <FaCheckSquare></FaCheckSquare>
              </span>
              <span>{selectedImg?.length} Files Selected</span>
            </h1>
            {/* Delete Button */}
            <div>
              <button className="text-xl font-bold text-red-600">
                Delete files
              </button>
            </div>
          </div>
        ) : (
          // Default Header
          <h1 className="px-10 py-5 font-bold text-2xl divide-slate-700">
            Gallery
          </h1>
        )}
      </div>
    </div>
  );
};

export default TitleBar;
