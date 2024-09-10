import CartList from "@/components/cart/CartList";
import ProductList from "@/components/product/ProductList";
import RestaurantMenuList from "@/components/restaurant/RestaurantMenuList";
import RestaurantStats from "@/components/restaurant/RestaurantStats";
import { IoArrowBackOutline } from "react-icons/io5";

export default function RestaurantByID() {
  return (
    <main>
      <RestaurantStats />
      <div className="mt-7 flex gap-6">
        <section>
          <div className="cursor-pointer flex items-center gap-2 border border-orange-800 rounded-full p-2 px-4 w-fit text-orange-800 font-medium">
            <IoArrowBackOutline color="brown" size={25} />
            <button className="whitespace-nowrap">All Restaurants</button>
          </div>
          <RestaurantMenuList />
        </section>
        <section>
          <ProductList />
        </section>
        <section>
          <CartList isCartOpen layout="side" />
        </section>
      </div>
    </main>
  );
}
