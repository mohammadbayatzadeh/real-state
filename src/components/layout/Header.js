import Link from "next/link";

//icons
import { VscSignIn } from "react-icons/vsc";

//styles
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/residentials">آگهی ها</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link href="/login" className={styles.signup}>
          <VscSignIn />
          <span>ورود</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
