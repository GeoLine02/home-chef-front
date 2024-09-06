// import AuthModal from "@/components/auth/AuthModal";
// import CartList from "@/components/cart/CartList";

import ProductDetailsModal from "@/components/product/ProductDetailsModal";

export default function Home() {
  return (
    <div className="">
      <h1>HOME PAGE</h1>
      {/* <CartList isCartOpen={true} layout="side" /> */}
      {/* <AuthModal /> */}
      <ProductDetailsModal />
    </div>
  );
}
