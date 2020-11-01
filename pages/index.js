import Head from "next/head";
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
  console.log("Data ", movies.Search);
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
          {movies.Search.map((movie) => {
            return (
              <div className={styles.card} key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <h4> {movie.Title} </h4>
                <p>Year : {movie.Year} </p>
              </div>
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
