import Head from 'next/head';
import styles from '@styles/Home.module.css';
import Link from "next/link";

export default function Index() {

  return (
    <div className={styles.container}>
      <Head>
        <title>zeH-SHOP Lenovo App</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to zeH-SHOP Lenovo <a>Laptops</a>
        </h1>

        <p className={styles.description}>
          We are selling the best Lenovo generations from{' '}
          <em >ThinkPad</em>{' '}series. Security, build quality, powerful performance and a durable design,
           making it the best business ultraportable ...
        </p>

        <div className={styles.grid}>
          <a href="https://www.lenovo.com/us/en/thinkpad" className={styles.card}>
            <h3 className={styles.card_title}>Lenovo Thinkpad units &rarr;</h3>
            <p>Discover ThinkPad.{' '}Every ThinkPad is made to endure.</p>
          </a>

          <Link href="/laptops" >
            <a className={styles.card}>
              <h3 className={styles.card_title}>My Shop &rarr;</h3>
              <p>Show me all laprops we have in stock :)</p>
            </a>
          </Link>
          
        </div>
      </main>
    </div>
  )
}

/*
export const getStaticProps: GetStaticProps = async (context) => {

  const myDB = await openDB();

  const laptops = await myDB.all("SELECT * FROM laptops;")

  return {
    props: {
      laptops
    }
  }
}*/