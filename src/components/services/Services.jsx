import React from 'react';
import "./services.css";

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Serviços</h2>
        <span className="section__subtitle">O que eu ofereço</span>

        <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title"
                >Desenvolvedor <br /> de UI/UX
                </h3>
            </div>

            <span className="services__button">
            Ver Mais
            <i className="uil uil-arrow-right services button-icon"></i>
            </span>

            <div className="services__modal">
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">UI/UX Developer</h3>
                    <p className="services__modal-description">
                        Providenciando trabalho de qualidade 
                        para clientes e empresas.
                    </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Desenvolvimento de interfaces para o usuário.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Desenvolvimento de páginas Web.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Desenvolvimento de aplicativos Mobile.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Faço o Design de experiência do usuário.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">
                    Desenvolvedor <br /> Frontend
                </h3>
            </div>

            <span className="services__button">
           Ver Mais 
            <i className="uil uil-arrow-right services button-icon"></i>
            </span>

            <div className="services__modal">
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">
                        Desenvolvedor Frontend
                    </h3>
                    <p className="services__modal-description">
                        Providenciando trabalho de qualidade 
                        para clientes e empresas.
                    </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Desenvolvimento de interfaces para o usuário.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Desenvolvimento de páginas Web.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Desenvolvimento de aplicativos Mobile.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Faço o Design de experiência do usuário.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* definir posteriormente o que inserir */}
        {/* <div className="services__container container grid">
            <div>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">
                    A definir <br />
                    item.
                </h3>
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

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Desenvolvimento de interfaces para o usuário.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Desenvolvimento de páginas Web.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Desenvolvimento de aplicativos Mobile.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Faço o Design de experiência do usuário.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div> */}
        </div>
    </section>
  )
}

export default Services