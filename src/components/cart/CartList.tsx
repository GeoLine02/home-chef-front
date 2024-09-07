import CartItem from "./CartItem";

interface ICartItemProps {
  layout: "default" | "side";
  isCartOpen: boolean;
}

export default function CartList({ layout, isCartOpen }: ICartItemProps) {
  return (
    <div
      className={`${
        layout === "side" &&
        "hidden min-w-80 lg:flex flex-col justify-between max-h-[91vh] sticky left-0 top-5 bottom-5 border-2 border-gray-200 p-4 z-40"
      } ${layout === "default" && "min-w-72 z-50"} ${
        layout === "default" &&
        "absolute min-w-80 top-16 -left-20 max-w-80 transition-all duration-300 transform scale-100 shadow-lg border-2 border-gray-300 border-t-0"
      } ${
        !isCartOpen && layout === "default"
          ? "opacity-0 invisible scale-0"
          : "opacity-100 visible scale-100 z-50 bg-white"
      } rounded-2xl p-4`}
    >
      <div>
        <div>
          <div className="flex w-full justify-between mb-2">
            <h1 className="text-2xl">Cart</h1>
            <div className="flex gap-1 items-center">
              <button className="underline">Clear</button>
              {layout === "default" && <h1 className="text-4xl">X</h1>}
            </div>
          </div>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>

      <button className="w-full p-2 bg-customOrange rounded-full hover:bg-orange-300">
        Checkout (340$)
      </button>
    </div>
  );
}
