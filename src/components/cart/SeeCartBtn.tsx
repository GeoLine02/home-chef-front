import { IoCartOutline } from "react-icons/io5";

export default function SeeCartBtn() {
  return (
    <button
      type="button"
      className="flex justify-center items-center gap-2 bg-customOrange rounded-full px-6 py-3"
    >
      <IoCartOutline size={24} />
      <h1 className="text-sm">
        <span>(0)</span> Cart
      </h1>
    </button>
  );
}
