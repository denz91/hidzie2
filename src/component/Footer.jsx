import React from "react";
import Instagram from "../images/icon/instagram.svg";
import Tiktok from "../images/icon/tik-tok.svg";
import Twitter from "../images/icon/twitter.svg";
import Facebook from "../images/icon/facebook.svg";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">Hidzie</h3>
          <p>Deskripsi footer atau informasi lainnya.</p>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="Instagram" className="w-[40px]" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Tiktok} alt="Instagram" className="w-[40px]" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Twitter} alt="Instagram" className="w-[40px]" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Facebook} alt="Instagram" className="w-[40px]" />
              </a>
            </li>
            {/* Tambahkan tautan lainnya di sini */}
          </ul>
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
