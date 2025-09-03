import type { Metadata } from "next";
import "./globals.css";
import Header_menu from "@/components/Menu/Header_menu";
import Footer_menu from "@/components/Menu/Footer_menu";

export const metadata: Metadata = {
  title: "Becamex Ecom",
  description: "Website bất động sản Becamex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Header_menu />
        <main>{children}</main>
        <Footer_menu />
      </body>
    </html>
  );
}
