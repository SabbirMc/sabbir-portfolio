import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <nav className="footer_content">
          <Link href="/">
            <a className="footer_content_link">Dribble</a>
          </Link>
          <Link href="/">
            <a className="footer_content_link">Behance</a>
          </Link>
          <Link href="/">
            <a className="footer_content_link">Linkedin</a>
          </Link>
          {/* <div className="footer_sponsor">
            Powered by
            <Link href="/">
              <a className="sponsor_name">Sapan Mozammel</a>
            </Link>
          </div> */}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
