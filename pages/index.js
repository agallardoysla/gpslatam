import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(){
  return (
    <div className={styles.container}>
      {/* This will be placed in head outisde document's body*/}
      <Head>
        <title>GPS Latam</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/landing.css" />
        {/* Acumin-pro font */}
        <link rel="stylesheet" href="https://use.typekit.net/rir3mhi.css" />
      </Head>

      {/* Regular body content */}
      <main className={styles.main}>
        <section className={styles.section}>
          {/* Header */}
          <header className={styles.header}>
            <img src="/images/logo-header.png" alt="GPS Latam logo" className={styles.logo_header} />
            <div className={styles.link_list}>
              <a href="#inicio">Inicio</a>
              <a href="#plataforma">Plataforma</a>
              <a href="#precio">Precio</a>
              <a href="#videos">Videos</a>
              <a href="#contacto">Contacto</a>
            </div>
          </header>
          {/* Pane 1 */}
          <div id="inicio">
            Pane 1
            <div className="">
            </div>
          </div>
        </section>
        {/* Pane 2 */}
        <section id="plataforma" className={styles.section}>
          Pane 2
        </section>
        {/* Pane 3 */}
        <section id="precio" className={styles.section}>
          Pane 3
        </section>
        {/* Pane 4 */}
        <section id="videos" className={styles.section}>
          Pane 4
        </section>
        {/* Pane 5 */}
        <section id="contacto" className={styles.section}>
          Pane 5
        </section>
        {/* Pane 6 */}
        <section id="comentarios" className={styles.section}>
          Pane 6
        </section>
        {/* Footer */}
        <footer className={styles.footer}>
          <img src="/images/logo-footer.png" alt="GPS Latam logo" className={styles.logo_footer+" "+styles.item} />
          <div className={styles.contacto}>
            <div className={styles.item}>
              <img src="/images/phone-icon.png" alt="Phone icon" /> +51 961 995 146
            </div>
            <div className={styles.item}>
              <img src="/images/mail-icon.png" alt="Mail icon" /> gpslatam@gmail.com
            </div>
          </div>
          <div className={styles.item}>
            <img src="/images/fb-icon.png" alt="Facebook logo" /> |&nbsp;
            <img src="/images/ig-icon.png" alt="Instagram logo" />
          </div>
        </footer>
      </main>
    </div>
  )
}
