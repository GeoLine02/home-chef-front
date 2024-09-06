import { IoSearch } from "react-icons/io5";

export default function RestaurantSearch() {
  return (
    <div className="relative w-full">
      <IoSearch
        size={24}
        className="absolute top-1/2 left-3 transform -translate-y-1/2"
      />
      <input
        type="search"
        placeholder="Search Restaurant"
        className="w-full text-sm pl-10 pr-5 py-3 border-2 rounded-full border-outlineColor focus:outline-none"
      />
    </div>
  );
}
