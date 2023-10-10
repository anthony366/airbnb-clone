import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";
import { Nunito } from "next/font/google";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SeachModal";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import Favicon from "/public/images/online-bnb-favicon.ico";

const font = Nunito({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Online-bnb",
  description:
    "Find amazing places to stay at amazing prices anywhere in the world!",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SearchModal />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
