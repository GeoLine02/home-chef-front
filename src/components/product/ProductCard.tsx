import Image from "next/image";
import ProductIamge from "../../assets/images/productPhoto.png";
import AddToCartBtn from "../shared/AddToCartBtn";
import ProductQuantity from "../shared/ProductQuantity";

export default function ProductCard() {
  const isCartItem = false;

  return (
    <div className="w-fit">
      <Image alt="product image" src={ProductIamge} />
      <div className="sm:flex items-center justify-between mt-3">
        <div>
          <h1>product name</h1>
          <span>145$</span>
        </div>
        {!isCartItem ? <AddToCartBtn /> : <ProductQuantity />}
      </div>
    </div>
  );
}
