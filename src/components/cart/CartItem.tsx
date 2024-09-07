import ProductQuantity from "../shared/ProductQuantity";

export default function CartItem() {
  //   const { productName, productPrice } = product;
  return (
    <div className="flex items-center justify-between w-full mb-1">
      <div>
        <h1>product Name</h1>
        <p>20$</p>
        {/* <h1 className="max-w-44 truncate">{productName}</h1>
        <p>{productPrice}</p> */}
      </div>
      <ProductQuantity />
    </div>
  );
}
