import * as React from "react"

import { css } from "@emotion/react"

import Layout from "../components/layout"
import "../components/css.css"
// markup
const IndexPage = () => {
  return (
    <Layout>
      <section css={css`
        padding: 1em;
        display: flex;
        justify-content: center;
        padding: 2em;
      `}>
        <article css={css`
          margin: 0;
          padding: 1em;
          max-width: 600px;
        `}>
          <p css={css`
           color: gray;
           margin: 0;
          `}>
          Hola, soy Jair Enriquez, actualmente estoy cursando el decimo ciclo de la carrera ingeniería de software, y desempeño el rol de trainee de desarrollo de software en la empresa TCS.
          Actualmente busco un puesto como desarrollador de software.
          <br/>
          <br/>
          Mis áreas de interés son el desarrollo de software de alta calidad, la gestión de proyectos y cloud computing.
          <br/>
          <br/>
          Tengo experiencia en sistemas de bases de datos, desarrollo de servicios web, metodología scrum y desarrollo de interfaces web con React. Además, tengo conocimientos de inglés nivel intermedio. 
          <br/>
          <br/>
          Me caracterizo por ser una persona que trabaja bien en equipo, con un enfoque orientado a resolver problemas, motivado para aprender continuamente y con capacidad para manejar mi tiempo de trabajo.
          <br/>
          <br/>
          Soy el candidato ideal y seria un gran aporte para su organización, dado que mis habilidades encajan muy bien en el puesto. También creo que con el tiempo podre liderar grandes proyectos que serán confiados hacia la compañía, ya sea desde la parte tecnológica o de gestión. 
          </p>
        </article>
        <img src='http://placekitten.com/500/500' alt=''/>
      </section>
r    </Layout>
  )
}

export default IndexPage
