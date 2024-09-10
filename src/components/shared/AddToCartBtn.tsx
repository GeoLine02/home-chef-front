import { GoPlus } from "react-icons/go";

export default function AddToCartBtn() {
  return (
    <div className="flex items-center justify-center gap-2 p-2 border border-customOrange rounded-full cursor-pointer hover:bg-customOrange hover:text-white">
      <GoPlus size={25} />
      <button>Add to cart</button>
    </div>
  );
}
