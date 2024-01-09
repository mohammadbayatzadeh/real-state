"use client";

//components
import Header from "./landing/Header";
import Footer from "./landing/Footer";

//styles
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}> {children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
