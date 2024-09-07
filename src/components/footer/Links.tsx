import Link from "next/link";

export default function Links() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 my-6">
      <Link href={""}>About Company</Link>
      <Link href={""}>Contact</Link>
      <Link href={""}>Delivery</Link>
      <Link href={""}>FAQ</Link>
      <Link href={""}>Rules & Agreements</Link>
    </div>
  );
}
