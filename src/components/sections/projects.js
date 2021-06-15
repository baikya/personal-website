import React from "react"
import Header from "../header"
import styled from "styled-components"

const ProjectsStyled = styled.section`
    div {
        border: solid white;
    }
`

const Projects = () => {
    return (
        <ProjectsStyled>
            <div>
                <h1>Projects</h1>

                <ul>
                    <li>
                        <h3>VR Music Visual Experience</h3>
                        <h5>Unity, C#</h5>
                        <p>blurb</p>
                    </li>
                </ul>


            </div>
        </ProjectsStyled>
    )
}









export default Projects