import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>

            <h3 className="about__title">Experiencia</h3>
            <span className="about__subtitle">inserir informacoes</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase about__icon' ></i>

            <h3 className="about__title">Projetos</h3>
            <span className="about__subtitle">inserir informacoes</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon' ></i>

            <h3 className="about__title">Contato</h3>
            <span className="about__subtitle">inserir informacoes</span>
        </div>
    </div>
  )
}

export default Info