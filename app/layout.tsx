import type { Metadata } from "next";

import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cascade",
  description: "Build and ship CSS Animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased overflow-x-hidden bg-[#F0F0F0] bg-[url('/bg.svg')] bg-no-repeat bg-cover`}
      >
        <a href="https://hackclub.com/" className="absolute px-12">
          <Image src={"/hc-banner.svg"} alt="" width={150} height={0} />
        </a>

        {children}
      </body>
    </html>
  );
}
