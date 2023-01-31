import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Mateus</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projetos</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Serviços</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/mateusbrbza/" 
            className="footer__social-link" target="_blank">
                <i class="bx bxl-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/mateus-barboza-70a443229/" 
            className="footer__social-link" target="_blank">
                <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://github.com/Mateusbrbza" 
            className="footer__social-link" target="_blank">
                <i class="uil uil-github-alt"></i>
            </a>
            </div>

            <span className="footer__copy">&#169; Feito por Mateus Barboza</span>
        </div>
    </footer>
  )
}

export default Footer