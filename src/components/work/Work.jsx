import React from 'react';
import "./work.css";
import Works from './Works';

const Work = () => {
  return (
    <section className="work section" id='portfolio'>
        <h2 className="section__title">Projetos</h2>
        <span className="section__subtitle">Trabalhos recentes</span>

        <Works />
    </section>
  )
}

export default Work;