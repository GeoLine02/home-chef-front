import Logo from "../shared/Logo";
import DownloadLinks from "./DownloadLinks";
import Links from "./Links";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="bg-customGray text-mainColor w-full py-16">
      <div className="w-full max-w-customMax mx-auto flex flex-col justify-center items-center">
        <Logo />
        <Links />
        <Socials />
        <DownloadLinks />
        <h1 className="text-sm italic">Copyright © 2023 Company name</h1>
      </div>
    </footer>
  );
}
