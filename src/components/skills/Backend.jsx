import React from 'react';

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Desenvolvedor Backend</h3>

        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Intermediário</span>
                    </div>
                </div>

                
            </div>

            <div className="skills__group">

                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Express</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Intermediário</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Node</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>

                {/* <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">MySQL Server</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Backend;