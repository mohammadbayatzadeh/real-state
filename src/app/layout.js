import Layout from "@/components/layout/Layout";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { Yekan } from "@/utils/Fonts";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

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
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
