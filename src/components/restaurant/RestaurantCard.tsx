import Image from "next/image";
import RestaurantPhoto from "@/assets/images/restaurant.png";

export default function RestaurantCard() {
  return (
    <div className="min-w-80 max-w-80 px-6 py-3 my-4 rounded-xl border-2 border-gray-200 border-t-0 shadow-lg bg-white">
      <Image
        alt="restaurant alt"
        src={RestaurantPhoto}
        width={100}
        height={100}
        layout="responsive"
      />
      <h1 className="text-lg">restaurant Name</h1>
    </div>
  );
}
