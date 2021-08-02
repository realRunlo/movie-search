import Head from "next/head";
import styles from "./Layout.module.css";
import Link from 'next/link'



const Layout = ({ children}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>MovieSearch</title>
                <link rel="icon" href="/favicon.ico" />   // trocar o icon
            </Head>

            <header className={styles.header}>
                <Link href="/">
                <img href="../Home" src="/logo.png" className={styles.logo} alt=""></img>
               </Link>
            </header>

            <main className={styles.main}> {children}  </main>

            <footer className={styles.footer}>Gonçalo Pereira</footer>
        </div>


    );

};

export default Layout;