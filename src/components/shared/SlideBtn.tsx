import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface ISlideBtnProps {
  direction: "left" | "right";
}

export default function SlideBtn({ direction }: ISlideBtnProps) {
  return (
    <button className=" aspect-square rounded-full bg-white border border-gray-300 p-4">
      {direction === "left" ? (
        <IoIosArrowBack size={20} />
      ) : (
        <IoIosArrowForward size={20} />
      )}
    </button>
  );
}
