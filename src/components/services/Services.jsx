import React from 'react'

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Serviços</h2>
        <span className="section__subtitle">O que eu ofereço</span>

        <div className="services__container container grid">
            <div>
                <i className="uil uil services__icon"></i>
                <h3 className="services__title"></h3>
            </div>

            <span className="services__button">
            Ver Mais 
            <i className="uil uil-arrow-right services button-icon"></i>
            </span>

            <div className="services__modal">
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title"></h3>
                    <p className="services__modal-description">
                        Providenciando trabalho de qualidade 
                        para clientes e empresas.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services