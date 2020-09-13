import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import { Footer } from "./Elements/Footer";

type LayoutProps = {
  title?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => {
  const [menuVisible, setMenuVisible] = useState(true);

  return (
    <div>
      <Head>
        <title className="pageTitle">Tyler Harper - {title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="../images/icons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="../images/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="../images/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="../images/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="../images/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="../images/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="../images/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="../images/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="../images/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../images/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="../images/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="../images/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../images/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="../images/icons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <header>
        <div className="title">
          <a id="heading-title" href="/">
            Tyler Harper
          </a>
        </div>
        <div
          id="toggle-menu"
          className="toggle-menu"
          onClick={() => {
            setMenuVisible((prevState) => !prevState);
          }}
        >
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </div>
        <nav id="nav-menu" className={!menuVisible ? "hidden" : ""}>
          <ul id="nav-list">
            <li>
              <Link href="/">
                <a className="menu-button">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a className="menu-button">Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="menu-button">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="menu-button">Contact</a>
              </Link>
            </li>
            <li>
              <div className="social-icons">
                <a target="_blank" href="https://twitter.com/jsstackdev">
                  <FontAwesomeIcon icon={faTwitter} className="faTwitter fa" />
                </a>
                <a target="_blank" href="https://github.com/tylerdh12">
                  <FontAwesomeIcon icon={faGithub} className="faGithub fa" />
                </a>
                <a target="_blank" href="http://linkedin.com/in/tyler-js-dev">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="faLinkedin fa"
                  />
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
