import React, {useState} from 'react';
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualificações</h2>
      <span className="section__subtitle">Minha jornada</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div 
          className={toggleState === 1 
          ? "qualification__button qualification__active button--flex" 
          : "qualification__button button--flex"
          }
          onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Formação
          </div>

          <div className={toggleState === 2
          ? "qualification__button qualification__active button--flex" 
          : "qualification__button button--flex"
          }
          onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> 
            Experiência
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 
          ? "qualification__content qualification__content-active"
          : "qualification__content"
          }>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  JStack
                  </h3>
                <span className="span qualification__subtitle">Dev Academy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 06/2023 - Presente
                </div>
              </div>
            </div>

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">
                  Analise e desenvolvimento de sistemas
                </h3>
                <span className="span qualification__subtitle">Descomplica</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 01/2023 - Presente
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  React - The Complete Guide
                  </h3>
                <span className="span qualification__subtitle">Udemy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 06/2022 - 01/2023
                </div>
              </div>
            </div>

             <div className="qualification__data">

              <div>
                <h3 className="qualification__title">
                  Trilha Especializar do Discover
                </h3>
                <span className="span qualification__subtitle">Rocketseat</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 06/2022 - 08/2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">The Web Developer Bootcamp</h3>
                <span className="span qualification__subtitle">Udemy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 01/2022 - 05/2022
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 
          ? "qualification__content qualification__content-active"
          : "qualification__content"
          }>
            <div className="qualification__data">

            <div>
              <h3 className="qualification__title">
                Desenvolvedor Fullstack
              </h3>
              <span className="span qualification__subtitle">Tdsoft Media Technology</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 01/2023 - Presente
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Desenvolvedor WEB</h3>
                <span className="span qualification__subtitle">Freelance</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 09/2022 - 11/2023
                </div>
              </div>
            </div>

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">
                  Analista de Suporte Técnico
                </h3>
                <span className="span qualification__subtitle">Tdsoft Media Technology</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 05/2021 - 01/2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification;