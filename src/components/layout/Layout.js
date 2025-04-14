import Footer from "./landing/Footer";
import Header from "./landing/Header";

function Layout({ children }) {
  return (
    <div className="w-[95dvw] sm:w-[90dvw] mx-auto py-2">
      <Header />
      <div className="flex flex-col items-center w-full  min-h-[500px]">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
