import { IoGlobeOutline } from "react-icons/io5";

export default function LanguageSwitcher() {
  return (
    <button type="button" className="flex flex-col justify-center items-center">
      <IoGlobeOutline size={24} />
      <p className="text-sm">English</p>
    </button>
  );
}
