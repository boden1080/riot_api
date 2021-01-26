import Head from 'next/head'
import Link from 'next/link'
import 'bulma/css/bulma.css'
//Shared Layout for all pages, includes Header/Meta stuff, footer and Navbar
export default function Layout({pageTitle, children}) {
    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
                <script src="../scripts/script.js"></script>
            </Head>
            <header>
                <section className="hero is-dark is-bold is-small">
                    <div className="hero-head">
                        <div id="app">
                            <nav className="navbar">
                                <div className="container">
                                    <div className="navbar-brand">
                                        <span className="navbar-burger" data-target="heroNavbar" >
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </span>
                                    </div>
                                    <div id="heroNavbar" className="navbar-menu">
                                        <div className="navbar-end">
                                            <Link href="/">
                                            <a className="navbar-item is-active">Home</a>
                                            </Link>
                                            <Link href="/about">
                                                <a className="navbar-item">About</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title"> Primary Title</h1>
                            <h2 className="subtitle"> Subtitle</h2>
                        </div>
                    </div>
                </section>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}