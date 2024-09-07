import Image from "next/image";
import ProductQuantity from "../shared/ProductQuantity";
import { IoIosClose } from "react-icons/io";

export default function ProductDetails() {
  const isCartItem = false;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="bg-white block gap-9 h-screen rounded-md md:p-6 xl:p-10 relative xl:flex md:w-fit md:h-auto">
        <div
          //   onClick={handleCloseModal}
          className="absolute top-8 right-8 cursor-pointer bg-white rounded-full box-content p-3"
        >
          <IoIosClose size={25} />
        </div>
        <img src="" alt="productName" />
        {/* <Image
          alt={"productName"}
          src={}
          width={100}
          height={100}
          layout="responsive"
          className="rounded-lg w-full max-w-screen-md"
        /> */}
        <div className="flex gap-6 flex-col py-5 px-5 xl:py-0 xl:px-0">
          <div className="flex justify-between  xl:flex-col gap-4">
            <h1 className="font-medium text-3xl">productName</h1>
            <h1 className="font-medium text-3xl">$ productPrice</h1>
          </div>
          {/* buttons */}
          <div className="flex flex-col-reverse xl:flex-col gap-6">
            <div className="flex items-center gap-8">
              <ProductQuantity />
              <div>
                {!isCartItem && (
                  <button className="bg-customOrange w-fit py-2 px-3 rounded-full">
                    Add to cart
                  </button>
                )}
                {isCartItem && (
                  <button
                    // onClick={handleRemoveCartItem}
                    className="bg-red-600 text-white w-fit py-2 px-3 rounded-full"
                  >
                    Remove from cart
                  </button>
                )}
              </div>
            </div>
            {/* description */}
            <div className="max-w-96">
              <br />
              <span className="font-medium">Compound</span>
              <p>Dynamic compond</p>
              <br />
              <span className="font-medium">Description</span>
              <p>productDescription</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
