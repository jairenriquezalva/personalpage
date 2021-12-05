import React from "react"

import { css } from "@emotion/react"

const ExperienceCard = ({institution, institutionDescription, rol, rolActivities, period })=>{
    return (
        <div css={css`
            padding: 1em;
            display: flex;
            flex-direction: column;
            max-width: 700px;
            color: gray;
        `}>
            <div css={css`
                display: flex;
            `}>
                <h1 css={css`
                    flex: 1;
                    margin: 0;
                    color: #48CE6F;
                    font-size: 1.5em;
                    `}>
                    {rol}
                </h1>
                <div css={css`
                        flex: 1     ;
                        text-align: center;
                        display: flex;
                        flex-direction: column-reverse;
                        justify-content: center;
                    `}>
                    <h4 css={css`
                        margin: 0;      
                        font-weight: bold;
                        font-size: 1em;
                    `}>
                    {period}
                    </h4>
                </div>
            </div>
            <h3 css={css`
                font-size: 1em;
                padding: 0.5em;
                padding-left: 0em;
                margin: 0;
                font-weight: bold;
            `}>{institution}:</h3>
            <p css={css`
                padding: 0.5em;
                padding-left: 0em;
                margin: 0;
            `}>{institutionDescription}</p>
            <ul css={css`
                padding: 0.5em;
                margin: 0;
            `}>
            {rolActivities.map((activity)=><li>{activity}</li>)}
            </ul>
        </div>
    )
}

export default ExperienceCard;