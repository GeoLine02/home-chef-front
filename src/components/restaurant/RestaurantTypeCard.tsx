import PizzaIcon from "@/assets/images/pizza.svg";
import Image from "next/image";

export default function RestaurantTypeCard() {
  return (
    <div className="text-center">
      <Image alt="pizza" src={PizzaIcon} />
      <span>category</span>
    </div>
  );
}
