import React from "react"
import Header from "../header"
import styled from "styled-components"

const ContactStyled = styled.section`
    div {
        border: solid white;
    }
`

const Contact = () => {
    return (
        <ContactStyled>
            <div>
                <h1>Contact</h1>

                <p>dude let's get lit</p>
            </div>
        </ContactStyled>
    )
}









export default Contact