import Head from "next/head";
import Item from "../component/item";
import styles from "../styles/Home.module.css";

const API = "http://www.omdbapi.com/";
export async function getServerSideProps() {
  const res = await fetch(
    `${API}?apikey=dca61bcc&s=harry+potter`
  );
  const movies = await res.json();
  return {
    props: {
      movies,
    },
  };
}

export default function Home({ movies }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fakhryan's Next.js App !</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {movies.Search.map((movie, index) => {
            return (
              <Item
                key={index}
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
              />
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
