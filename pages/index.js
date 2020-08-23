import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(){
  return (
    <div className={styles.container}>
      {/* This will be placed in head outisde document's body*/}
      <Head>
        <title>GPS Latam</title>
        <link rel="icon" href="/favicon.ico" />
        <style href="../public/pure.css"></style>
      </Head>

      {/* Regular body content */}
      <main className={styles.main}>
        <section className={styles.section}>
          {/* Header */}
          <header className={styles.header}>
            Header
          </header>
          {/* Pane 1 */}
          <div className={styles.pane1}>
            Pane 1
          </div>
        </section>
        {/* Pane 2 */}
        <section className={styles.section}>
          Pane 2
        </section>
        {/* Pane 3 */}
        {/* Pane 4 */}
        {/* Pane 5 */}
        {/* Pane 6 */}
        {/* Footer */}
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
