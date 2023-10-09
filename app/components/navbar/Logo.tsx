"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <>
      <Image
        onClick={() => router.push("/")}
        alt="Logo"
        className="hidden lg:block cursor-pointer"
        height="47"
        width="175"
        src="/images/online-bnb-logo.png"
      />

      <Image
        onClick={() => router.push("/")}
        alt="Logo"
        className="hidden md:block mr-2 lg:hidden cursor-pointer"
        height="47"
        width="43"
        src="/images/online-bnb_brand.png"
      />
    </>
  );
};

export default Logo;
