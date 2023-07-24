import React from 'react';
import "./footer.scss";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div>
            <ul className="footer__list">
              <li className="footer__list-item description">License</li>
              <li className="footer__list-item description">Privacy & cookies</li>
              <li className="footer__list-item description">Terms of use</li>
              <li className="footer__list-item description">Trademarks</li>
            </ul>
          </div>
          <hr className='footer__divider'></hr>
        </div>
        <div className="footer__bottom">
          <span className="copyright description">&copy; copyright</span>
          <ul className="footer__list footer__list--bottom">
            <li className="footer__list-item"><AiFillInstagram/></li>
            <li className="footer__list-item"><FaFacebook/></li>
            <li className="footer__list-item"><AiFillYoutube/></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer