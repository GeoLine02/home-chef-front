import { FcGoogle } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";

export default function Auth() {
  return (
    <div className="max-w-80 md:max-w-md p-8 rounded-xl bg-white relative">
      <IoCloseOutline
        size={50}
        className="bg-white shadow-lg p-2 absolute -top-6 -right-6 rounded-full cursor-pointer"
      />
      <div className="flex flex-col gap-6 mb-8">
        <h1 className="text-2xl font-bold text-center">
          Enter your phone number or email address.
        </h1>
        <input
          type="text"
          placeholder="Enter your phone number or email address. mail"
          className="w-full p-3 rounded-2xl border-2 border-gray-400"
        />
        <button className="w-full p-3 rounded-full bg-customOrange">
          Log in
        </button>
        <div className="flex gap-11 items-center">
          <hr className="w-full" />
          <span>or</span>
          <hr className="w-full" />
        </div>
        <div className="border-2 p-2 border-gray-400 rounded-full w-full flex items-center justify-center cursor-pointer">
          <FcGoogle size={25} />
          <button>Log in with Google</button>
        </div>
      </div>
      <p className="text-gray-400">
        By continuing, you agree to receive calls, SMS and messages from
        WhatsApp (including those sent using an automatic dialing system) and
        affiliated companies at the number you provide.
      </p>
    </div>
  );
}
