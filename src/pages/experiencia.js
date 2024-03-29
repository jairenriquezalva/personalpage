import * as React from "react"
import { css } from "@emotion/react"

import Layout from "../components/layout"

import ExperienceCard from "../components/experienceCard"
import "../components/css.css"
// markup
const Experiencia = () => {
  return (
    <Layout>
      <div css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;    
        padding: 2em;
        box-sizing: border-box;
      `}>
        <ExperienceCard 
          institution="VG All Services" 
          institutionDescription="Empresa que se dedica a brindar servicios de desarrollo de software y auditoria para empresas de Telecomunicaciones.  "
          rol="Programador Python"
          rolActivities={["Desarrollo de los servicios REST con DJANGO y FASTAPI", "Extraccion de datos", "Desarrollo de la aplicacion web con REACT"]}
          period="Marzo 2021 - Actualidad"
        />
        <ExperienceCard 
          institution="Tata Consultancy Services" 
          institutionDescription="Empresa que se dedica a prestar servicios de outsourcing en el rubro de tecnologias de informacion a diferentes instituciones"
          rol="Trainee de Ingenieria de Sistemas"
          rolActivities={["mantenimiento del software CONSYST BCP", "Desarrollo de nuevos requerimientos para el sistema CONSYST BCP "]}
          period="Diciembre 2020 - Marzo 2021"
          />
        <ExperienceCard 
          institution="VG All Services" 
          institutionDescription="Empresa que se dedica al desarrollo de software a medida y a la implementacion de software para centros de salud"
          rol="Asistente Programador"
          rolActivities={["Desarrollo de modulos para el software VG Salud", "Implementacion del sistema VG Salud en clinica Chorrisalud"]}
          period="Julio 2020 - Septiembre 2020"
        />
        <ExperienceCard 
          institution="VG All Services" 
          institutionDescription="Empresa que se dedica al desarrollo de software a medida y a la implementacion de software para centros de salud"
          rol="Asistente Programador"
          rolActivities={["Desarrollo de modulos para el software VG Salud", "Implementacion del sistema VG Salud en clinica primavera"]}
          period="Agosto 2019 - Diciembre 2019"
        />
      </div>
    </Layout>
  )
}

export default Experiencia
