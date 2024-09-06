import SeeCartBtn from "../cart/SeeCartBtn";
import LanguageSwitcher from "../shared/language_switcher/LanguageSwitcher";
import Logo from "../shared/Logo";
import RestaurantSearch from "../shared/restaurant_search_bar/RestaurantSearch";
import BurgerMenuBtn from "./burger_menu/BurgerMenuBtn";
import User from "./User";

export default function Header() {
  return (
    <header className="w-full max-w-customMax mx-auto bg-mainColor flex justify-between items-center py-3 px-4">
      <div className="w-full md:w-fit flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8">
        <div className="w-full md:w-fit flex justify-between items-center">
          <span className="md:hidden">
            <BurgerMenuBtn />
          </span>
          <Logo />
        </div>
        <RestaurantSearch />
      </div>
      <div className="hidden md:flex justify-center items-center gap-8">
        <LanguageSwitcher />
        <SeeCartBtn />
        <User />
      </div>
    </header>
  );
}
