import React, { useState } from "react";
import { useEffect } from "react"
import { Link as GLink }  from "gatsby" 

import { css } from "@emotion/react"

const Link = ({to,children,active})=>{
    return (
        <GLink to={to} css={css`
            border-right: 1px solid gray;
            text-decoration: none;
            padding: 1em;
            color: gray;
            background-color: ${active?"#E8F8F5":"white"};
            transition: background-color 2s;
            &:visited {
                color: gray;
            }
            &:active {
                color: black;
            }
            &:hover {
                text-decoration: underline;
            }
        `}>
            <li css={css`
                &:hover {
                    cursor: pointer;
                }
            `}>
                {children}
            </li>
        </GLink>
    )
}

const Layout = ( {children} ) => {
    const [currentLink,setCurrentLink] = useState(); 
    useEffect(()=>{
        setCurrentLink(window.location.pathname);
    })
    return(
        <div css={css`
            display: flex;
            flex-direction: column;
        `}>
            <header css={css`
                background-image: url('http://placekitten.com/g/1920/1080');
                background-size: cover;
                background-position: center;
                width: 100%;
            `}>
                <div css={css`
                    height: 250px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                `}>
                    <h1 css={css`
                        color: white;
                    `}>
                        Jair Enriquez
                    </h1>
                </div>
                <nav css={css`
                    width: 100%;
                    background-color: white;
                `}>
                    <ul css={css`
                        box-sizing: border-box;
                        display: flex;
                        width: 100%;
                        list-style: none;
                        color: white;
                        padding: 1em;
                        margin: 0;
                        justify-content: center;
                        & li {
                           
                        }
                    `}>
                        <Link to="/perfil" active={currentLink=="/perfil"}>Perfil</Link>
                        <Link to="/experiencia" active={currentLink=="/experiencia"}>Experiencia</Link>
                        <Link to="/proyectos" active={currentLink=="/proyectos"}>Proyectos</Link>
                        <Link to="/conocimientos" active={currentLink=="/conocimientos"}>Conocimientos</Link>
                    </ul>
                </nav>
            </header>
            {children}
        </div>
    )
}

export default Layout;