import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <a href="#qualification">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>

            <h3 className="about__title">Experiencia</h3>
            <span className="about__subtitle">Um ano e meio como dev</span>
        </div>
        </a>

        <a href="#portfolio">
        <div className="about__box">
        <i class='bx bx-briefcase about__icon' ></i>

            <h3 className="about__title">Projetos</h3>
            <span className="about__subtitle">Mais de 4 projetos em web e mobile</span>
        </div>
        </a>

        <a href="#contact">
        <div className="about__box">
          <i class='bx bx-support about__icon' ></i>

            <h3 className="about__title">Contato</h3>
            <span className="about__subtitle">Email, Linkedin, Telefone</span>
        </div>
        </a>
    </div>
  )
}

export default Info