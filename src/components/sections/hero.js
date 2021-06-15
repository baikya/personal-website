import React from "react"
import Header from "../header"
import styled from "styled-components"

const HeroStyled = styled.section`
    .intro {
        border: solid white;
    }
`;

const Hero = () => {


    const intro1 = <h1>Hi, my name is Jonathan.</h1>
    const intro2 = <h2>I love creating and coding.</h2>
    const intro3 = <p>I am a software engineer based in Fairfax, VA primarily working in back-end development (and learning front-end) </p>


    return (
        <HeroStyled>
            <div className="intro">
                {intro1}
                {intro2}
                {intro3}
            </div>
        </HeroStyled>
    )
}









export default Hero