export default function ProductQuantity() {
  return (
    <div className="flex items-center justify-between w-28">
      <button
        // onClick={handleDecrementQuantity}
        className="bg-customOrange text-white w-9 h-9"
      >
        -
      </button>
      <h1>1</h1>
      {/* <h1>{displayProductQuantity(product)}</h1> */}
      <button
        // onClick={handleIncrementQuantity}
        className="bg-customOrange text-white w-9 h-9"
      >
        +
      </button>
    </div>
  );
}
