import type { Metadata } from "next";
import "./globals.css";
import Header_menu from "@/components/Menu/Header_menu";
import Footer_menu from "@/components/Menu/Footer_menu";
import { Bounce, ToastContainer } from "react-toastify";

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
      <body suppressHydrationWarning={true}>
        <Header_menu />
        <main>{children}</main>
        <Footer_menu />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
