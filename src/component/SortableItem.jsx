import { FaCheckSquare } from "react-icons/fa";
import { FaRegSquareFull } from "react-icons/fa6";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({
  id,
  image,
  selectedImg,
  setSelectedImg,
  className,
}) => {
  const isSelected = selectedImg.includes(id);

  return <div></div>;
};

export default SortableItem;
