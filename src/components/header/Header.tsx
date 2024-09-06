import SeeCartBtn from "../cart/SeeCartBtn";
import LanguageSwitcher from "../shared/language_switcher/LanguageSwitcher";
import Logo from "../shared/Logo";
import RestaurantSearch from "../shared/restaurant_search_bar/RestaurantSearch";
import User from "./User";

export default function Header() {
  return (
    <header className="w-full bg-mainColor flex justify-between items-center py-3">
      <Logo />
      <RestaurantSearch />
      <LanguageSwitcher />
      <SeeCartBtn />
      <User />
    </header>
  );
}
