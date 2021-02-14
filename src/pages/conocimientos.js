import * as React from "react"

import { css } from "@emotion/react"

import Layout from "../components/layout"
import SkillCard from "../components/skillCard.js"

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
          skillLevel={8}
        />
        <SkillCard
          skillName=".Net Core"
          skillLevel={6}
        />
        <SkillCard
          skillName="Node.js"
          skillLevel={4}
        />
        <SkillCard
          skillName="Spring"
          skillLevel={4}
        />
        <SkillCard
          skillName="MongoDB"
          skillLevel={5}
        />
        <SkillCard
          skillName="SQL"
          skillLevel={5}
        />
        <SkillCard
          skillName="Html"
          skillLevel={7}
        />
         <SkillCard
          skillName="CSS"
          skillLevel={8}
        />
         <SkillCard
          skillName="Ingles"
          skillLevel={6}
        />
      </div>
    </Layout>
  )
}

export default Conocimientos