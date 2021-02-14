import React from "react"

import { css } from "@emotion/react"

const SkillCard = ({ skillName, skillLevel })=>{
    const level = new Array(skillLevel).fill(0);
    return (
        <div css={css`
            display: flex;
            color: gray;
            width: 500px;
            padding: 1em;
        `}>
            <h5 css={css`
                margin: 0;
                width: 200px;
            `}>
                {skillName}
            </h5>
            <div css={css`
                width: 300px;
            `}>
                {level.map((_,i)=><div key={i} css={css`margin: 3px; display: inline-block; width:1em; height: 1em; background-color: #E8F8F5;`}></div>)}
            </div>
        </div>
    )
}

export default SkillCard;