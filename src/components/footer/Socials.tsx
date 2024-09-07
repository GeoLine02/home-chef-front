import Image from "next/image";
import facebook_icon from "../../../public/svg/fb_icon.svg";
import instagram_icon from "../../../public/svg/instagram_icon.svg";
import linkedin_icon from "../../../public/svg/linkedin_icon.svg";

export default function Socials() {
  return (
    <div className="flex justify-center items-center gap-5">
      <Image
        src={facebook_icon}
        alt="facebook"
        width={900}
        className="cursor-pointer w-9"
      />
      <Image
        src={instagram_icon}
        alt="instagram"
        width={900}
        className="cursor-pointer w-9"
      />
      <Image
        src={linkedin_icon}
        alt="linkedin"
        width={900}
        className="cursor-pointer w-9"
      />
    </div>
  );
}
