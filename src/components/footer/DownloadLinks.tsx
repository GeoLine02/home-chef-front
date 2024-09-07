import Image from "next/image";
import download_apple_icon from "../../../public/png/appstore_download.png";
import download_google_icon from "../../../public/webp/google_download.webp";
import Link from "next/link";

export default function DownloadLinks() {
  return (
    <div className="w-fit py-8 flex justify-center items-center gap-5">
      <Link href={""}>
        <Image
          src={download_apple_icon}
          alt="download from apple store"
          width={900}
          className="w-32"
        />
      </Link>
      <Link href={""}>
        <Image
          src={download_google_icon}
          alt="download from apple store"
          width={900}
          className="w-32"
        />
      </Link>
    </div>
  );
}
