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

export const metadata = {
  title: "سامانه خرید و فروش ملک",
  description: "سامانه خرید و فروش ملک",
};
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={Yekan.className}>
        <NextAuthProvider>
          <ToastContainer />
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
