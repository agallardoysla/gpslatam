import { useEffect, useContext, createContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const ContactInformation = createContext({
  contacto_celular: "+51 961 654 321",
  contacto_email: "gpslatam@gmail.com",
  link_whatsapp: "https://wa.me/+51xxxxxxxxx",
  link_email: "gpslatam@gmail.com",
})

export default function Home(){
  return (
    <div className={styles.container}>
      {/* This will be placed in head outisde document's body*/}
      <Head>
        <title>GPS Latam</title>

        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/landing.css" />
        {/* Acumin-pro font */}
        <link rel="stylesheet" href="https://use.typekit.net/rir3mhi.css" />
        <script src="/js/yt.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js"></script>
      </Head>

      {/* Regular body content */}
      <main className={styles.main}>
        <Header />

        <Pane1 />
        <Pane2 />
        <Pane3 />
        <Pane4 />
        <Pane5 />

        <Footer />
      </main>
    </div>
  )
}

function Header({}){
  return (
    <header className={styles.header}>
      <img src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Flogo-header.png?alt=media&token=60c48429-2110-4ddd-843f-5e2c05d64984" alt="GPS Latam logo" className={styles.logo_header} />
      <img src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Flogo-footer.png?alt=media&token=eed4ca0a-045d-4730-a7cc-2afc9cad704e" alt="GPS Latam logo" className="logo_header_movil" />
      <div className="link_list">
        {/* Burger menu */}
        <input type="checkbox" id="header-button" />
        <label htmlFor="header-button"></label>

        <ul>
          <Link href={"#"+styles.inicio}><a>Inicio</a></Link>
          <Link href={"#"+styles.plataforma}><a>Plataforma</a></Link>
          <Link href={"#"+styles.precio}><a>Precio</a></Link>
          <Link href="#videos"><a>Videos</a></Link>
          <Link href={"#"+styles.contacto}><a>Contacto</a></Link>
        </ul>
      </div>
    </header>
  )
}
function Pane1({}){
  return (
    <section id={styles.inicio} className={styles.section}>
      <div className={styles.section_container}>
        <div className={styles.half_1}>
          <img src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Fpane1-1.png?alt=media&token=f6bcaac0-adb6-4d5c-99cb-bb30e4c04df2" />
        </div>
        <div className={styles.half_2}>
          <img src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Fpane1-2.png?alt=media&token=a600fcb1-4617-4b19-9cbc-0fabac15bd92" />
        </div>
      </div>
    </section>
  )
}
function Pane2({}){
  return (
    <section id={styles.plataforma} className={styles.section}>
      <div className={styles.half_2}>
        <div>
          <h1>Nuestra plataforma</h1>
          <p>Se encarga del rastreo y ubicación de vehiculos robados, además del monitoreo de flotas</p>
          <li>Apagado de motor</li>
          <li>Control de velocidad</li>
          <li>Historial de recorrido</li>
          <li>Ubicación</li>
        </div>
      </div>
      <div className={styles.half_1}>
        <img src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Fpane2-1.png?alt=media&token=c5928c23-c515-4ea7-9075-020c501be6a1" />
      </div>
    </section>
  )
}
function Pane3({}){
  return (
    <section id={styles.precio} className={styles.section}>
      <div className={styles.half_1} align="center">
        <div className={styles.square}>
          <div className={styles.square_text}><b>App + Web Gratuito</b></div>
          <img className={styles.square_image} src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Fpane3-11.png?alt=media&token=85538d84-7937-4b46-bb67-242e804fc8f9" />
        </div>
        <div className={styles.divider}>
          <img className={styles.divider_img} src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Fpane3-1.png?alt=media&token=018df433-fef8-47f1-b940-06029767f044" />
        </div>
        <div className={styles.square}>
          <div className={styles.square_text}><b>Apagado de motor</b></div>
          <img className={styles.square_image} src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Fpane3-12.png?alt=media&token=8944c323-22ba-48c4-a1dd-222ea71b51a5" />
        </div>
        <div className={styles.divider}>
          <img className={styles.divider_img} src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Fpane3-1.png?alt=media&token=018df433-fef8-47f1-b940-06029767f044" />
        </div>
        <div className={styles.square}>
          <div className={styles.square_text}><b>Recarga S/8 al mes</b></div>
          <img className={styles.square_image} src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Fpane3-13.png?alt=media&token=f4744df5-9983-4a54-b972-b7bebab36279" />
        </div>
      </div>
      <div className={styles.half_2}>
        <img className={styles.half_21} src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Fpane3-21.png?alt=media&token=bd728020-6a47-4662-8faa-f6f6f050a763" />
        <img className={styles.half_22} src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Fpane3-22.png?alt=media&token=5b058506-8488-4ec1-95ab-c969bcc7eb00" />
      </div>
    </section>
  )
}
function Pane4({}){
  useEffect(() => {
    // Create script element to add youtube's api
    let script = document.createElement('script')
    script.src = "https://www.youtube.com/iframe_api"
    // Add script element to head element
    document.head.appendChild(script)
  }, [])

  return (
    <section id="videos" className={styles.section}>
      <div className="container-0">
        <div id="yt-player-0">
        </div>
        <span className="yt-text-0">Cómo funciona nuestro sistema de Apagado remoto</span>
      </div>
      <div className="container-1">
        <div id="yt-player-1">
        </div>
        <div id="yt-player-2">
        </div>
        <div id="yt-player-3">
        </div>
        <div id="yt-player-4">
        </div>
      </div>
    </section>
  )
}
function Pane5({}){
  const contexto = useContext(ContactInformation)

  // Execute after content is rendered
  useEffect(() => {
    // Add functionality to hide/show contact form
    document.getElementById('email-button').onchange = ev => {
      document.getElementById('contact-form').style.display = ev.target.checked?"inline-block":"none"
    }
  }, [])
  useEffect(() => {
    // Initialize emailjs service
    emailjs.init('user_PzgaERx4isvQKUCLloFHr')

    // Send form as email
    document.getElementById('c-send').onclick = ev => {
      // Stop form submit propagation
      ev.preventDefault()
      // Send form content as email
      emailjs.sendForm('test_mine_1', 'contacto_form', ev.target.parentElement)
      .then(res => {
        console.log("Response:", res);
      }, er => {
        console.log("Error:", er);
      })
    }
  }, [])

  return (
    <section id={styles.contacto} className={styles.section}>
      <div className={styles.half_1}>
        <div>
          <h1>Contáctanos</h1>
          <span><b>Celular: </b>{contexto.contacto_celular}</span>
          <br/>
          <span><b>Correo electronico: </b>{contexto.contacto_email}</span>
          <p>Si tienes dudas o sugerencias.</p>
          <a target="_blank" href={contexto.link_whatsapp} className={styles.wsp}>
            <img src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Fwsp-icon.png?alt=media&token=59e9e5e6-a49e-4206-8a2b-e45ff1ae58de" /><span> Escríbenos al Whatsapp</span>
          </a>
          <br/><br/>

          {/* Checkbox behavior to show contact form */}
          <label htmlFor="email-button" className={styles.email}>
            <img src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Femail-icon.png?alt=media&token=f18e574f-f544-4807-a775-dde2f8060470" />
            <span> Enviar un correo electrónico</span>
          </label>
        </div>
      </div>
      <div className={styles.half_2}>
        <input type="checkbox" id="email-button" /> {/* Hidden element */}
        <form id="contact-form">

          <span className={styles.h1}>Enviar un correo</span>

          <input type="text" name="user_name" placeholder="Nombre" />
          <br/>
          <input type="email" name="user_email" placeholder="Correo electronico" />
          <br/>
          <textarea rows="2" name="mensaje" placeholder="Contenido">
          </textarea>
          <br/>
          <button type="submit" id="c-send">Enviar</button>
        </form>
      </div>
    </section>
  )
}
function Footer({}){
  const contexto = useContext(ContactInformation)

  return (
    <footer className={styles.footer}>
      <img src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Flogo-footer.png?alt=media&token=eed4ca0a-045d-4730-a7cc-2afc9cad704e" alt="GPS Latam logo" className={styles.logo_footer+" "+styles.item} />
      <div className={styles.contacto}>
        <div className={styles.item}>
          <img src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Fphone-icon.png?alt=media&token=97dcec8a-f9ee-4efd-a9e8-683787f9235d" alt="Phone icon" /> {contexto.contacto_celular}
        </div>
        <div className={styles.item}>
          <img src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Fmail-icon.png?alt=media&token=ab642a9f-61b0-4530-b604-a52eae65306d" alt="Mail icon" /> {contexto.contacto_email}
        </div>
        <div id={styles.social} className={styles.item}>
          <a target="_blank" href="https://www.facebook.com/gaming/AN7HONY96oficial">
            <img src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Ffb-icon.png?alt=media&token=c09882b1-c997-49d0-be89-c50d21e7a51e" alt="Facebook logo" />
          </a>
          &nbsp;|&nbsp;
          <a target="_blank" href="#instagram">
            <img src="https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/LandingPage_GPSLatam%2Fig-icon.png?alt=media&token=a681028c-243f-4ace-88ad-2e54806ce695" alt="Instagram logo" />
          </a>
        </div>
      </div>
    </footer>
  )
}
