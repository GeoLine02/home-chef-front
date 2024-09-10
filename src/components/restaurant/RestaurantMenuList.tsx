import React from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";

export default function RestaurantMenuList() {
  return (
    <div className="w-fit mt-6 sticky left-0 top-3">
      <h1 className="font-bold text-2xl text-center mb-4">Menu</h1>
      <div className="space-y-5">
        <RestaurantMenuItem />
        <RestaurantMenuItem />
        <RestaurantMenuItem />
        <RestaurantMenuItem />
        <RestaurantMenuItem />
        <RestaurantMenuItem />
        <RestaurantMenuItem />
      </div>
    </div>
  );
}
