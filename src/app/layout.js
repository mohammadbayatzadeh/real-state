//layout
import Layout from "@/components/layout/Layout";

//styles
import "./globals.css";

//fonts
import { Yekan } from "@/utils/Fonts";

//elements
import { ToastContainer } from "react-toastify";

//providers
import NextAuthProvider from "@/providers/NextAuthProvider";

//progressbar
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "سامانه خرید و فروش ملک",
  description: "سامانه خرید و فروش ملک",
  icons: { icon: "./icon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={Yekan.className}>
        <NextAuthProvider>
          <NextTopLoader color="#465293" shadow="none" />
          <ToastContainer />
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
