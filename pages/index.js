import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div className={styles.title}>
      <h1>Homepage</h1>
      <p className={styles.text}>
        lorem ipsumVoluptate commodo occaecat occaecat officia dolor magna. Quis
        sint ipsum minim minim nisi. Elit quis mollit officia nostrud qui
        consequat. Aliquip mollit exercitation sit deserunt velit minim id culpa
        dolor. Mollit ut dolore aliquip eu qui exercitation aliqua dolor in quis
        officia consequat veniam. In voluptate cillum eiusmod laboris
        reprehenderit deserunt excepteur sit quis incididunt proident commodo
        enim laboris. Lorem Lorem velit excepteur adipisicing.
      </p>
      <Link href="/ninjas/test">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  );
}
