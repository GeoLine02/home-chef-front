// import AuthModal from "@/components/auth/AuthModal";
// import CartList from "@/components/cart/CartList";
// import ProductDetailsModal from "@/components/product/ProductDetailsModal";

import RestaurantList from "@/components/restaurant/RestaurantList";
import RestaurantTypeList from "@/components/restaurant/RestaurantTypeList";

export default function Home() {
  return (
    <div className="w-full">
      <section className="text-center py-5 bg-gray-300">
        <p>
          Find dishes that you like. Delivery or self-collection. Support
          independent sellers. Only in the Virtual Restaurant.
        </p>
      </section>
      <section>
        <h1 className="text-2xl font-bold">Restaurant Types</h1>
        <RestaurantTypeList />
      </section>
      <section>
        <h1 className="text-2xl font-bold">All Restaurants</h1>
        <RestaurantList />
      </section>
    </div>
  );
}
