import type { Metadata } from "next";
import { lato } from "@/app/ui/fonts";
import "./globals.css";
import Header from "@/app/ui/layout/header";
import Footer from "@/app/ui/layout/footer";
import clsx from "clsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(lato.className, "min-h-screen")}>
        <Header />
        <main className="pt-[82px] pb-[185px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
