import SlideBtn from "../shared/SlideBtn";
import RestaurantTypeCard from "./RestaurantTypeCard";

export default function RestaurantTypeList() {
  return (
    <div className="flex items-center gap-4 overflow-x-hidden my-4 relative">
      <div className="absolute top-auto left-2">
        <SlideBtn direction="left" />
      </div>
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <RestaurantTypeCard />
      <div className="absolute top-auto right-2">
        <SlideBtn direction="right" />
      </div>
    </div>
  );
}
