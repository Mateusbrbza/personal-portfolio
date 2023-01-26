import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Desenvolvedor Frontend</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <box-icon name='badge'></box-icon>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Intermediário</span>
                    </div>
                </div>

                <div className="skills__data">
                    <box-icon name='badge'></box-icon>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Intermediário</span>
                    </div>
                </div>

                <div className="skills__data">
                    <box-icon name='badge'></box-icon>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Intermediário</span>
                    </div>
                </div>

                <div className="skills__data">
                    <box-icon name='badge'></box-icon>
                    <div>
                        <h3 className="skills__name">Styled Components</h3>
                        <span className="skills__level">Intermediário</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <box-icon name='badge'></box-icon>
                    <div>
                        <h3 className="skills__name">Tailwind</h3>
                        <span className="skills__level">Intermediário</span>
                    </div>
                </div>

                <div className="skills__data">
                    <box-icon name='badge'></box-icon>
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Intermediário</span>
                    </div>
                </div>

                <div className="skills__data">
                    <box-icon name='badge'></box-icon>
                    <div>
                        <h3 className="skills__name">Next</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Frontend