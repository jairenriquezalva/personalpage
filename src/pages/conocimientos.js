import * as React from "react"

import { css } from "@emotion/react"

import Layout from "../components/layout"
import SkillCard from "../components/skillCard.js"
import "../components/css.css"

// markup
const Conocimientos = () => {
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
        <SkillCard
          skillName="React"
          skillLevel={7}
        />
        <SkillCard
          skillName=".Net Core"
          skillLevel={4}
        />
        <SkillCard
          skillName="Node.js"
          skillLevel={3}
        />
        <SkillCard
          skillName="Spring"
          skillLevel={3}
        />
        <SkillCard
          skillName="MongoDB"
          skillLevel={4}
        />
        <SkillCard
          skillName="SQL"
          skillLevel={5}
        />
        <SkillCard
          skillName="Html"
          skillLevel={6}
        />
         <SkillCard
          skillName="CSS"
          skillLevel={7}
        />
         <SkillCard
          skillName="Ingles"
          skillLevel={6}
        />
         <SkillCard
          skillName="Python"
          skillLevel={4}
        />
         <SkillCard
          skillName="Django"
          skillLevel={4}
        />
      </div>
    </Layout>
  )
}

export default Conocimientos