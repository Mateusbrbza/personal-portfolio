import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/mateusbrbza/" 
        className="home__social-icon" target="_blank">
            <i class="uil uil-instagram"></i>
        </a>

        <a href="https://wa.me/5548999994692" 
        className="home__social-icon" target="_blank">
            <i class='uil uil-whatsapp' ></i>
        </a>

        <a href="https://www.linkedin.com/in/mateus-barboza-70a443229/" 
        className="home__social-icon" target="_blank">
            <i class="uil uil-linkedin-alt"></i>
        </a>

        <a href="https://github.com/Mateusbrbza" 
        className="home__social-icon" target="_blank">
            <i class="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default Social