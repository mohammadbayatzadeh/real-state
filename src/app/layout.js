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
          <NextTopLoader
            color="#465293"
            initialPosition={0.08}
            crawlSpeed={200}
            height={5}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            zIndex={1600}
          />
          <ToastContainer />
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
