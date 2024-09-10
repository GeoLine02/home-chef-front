import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import UserProfileImage from "../../assets/images/userProfilePhoto.png";
import { FaRegEnvelope } from "react-icons/fa6";

export default function RestaurantStats() {
  return (
    <section className="bg-gray-200 py-6 flex items-center justify-between px-20">
      <div>
        <h1 className="text-3xl font-bold">Restaurant Name</h1>
        <div className="flex gap-1 items-center">
          <IoIosStar color="orange" />
          <IoIosStar color="orange" />
          <IoIosStar color="orange" />
          <IoIosStar color="orange" />
          <IoIosStar color="orange" />
          <span className="text-gray-600 font-semibold">5.0</span>
          <span className="text-gray-600 font-semibold">(97)</span>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <IoCartOutline size={25} />
          <span className="text-gray-600 font-semibold">min 140$</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div>
          <Image
            alt="profile photo"
            src={UserProfileImage}
            className="rounded-full"
          />
          <h1 className="font-medium">Marina</h1>
        </div>
        <div className="text-orange-400 font-medium flex gap-2 items-center mt-2">
          <FaRegEnvelope color="orange" />
          <span>Mail to marina</span>
        </div>
      </div>
    </section>
  );
}
