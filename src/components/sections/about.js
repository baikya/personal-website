import React from "react"
import styled from "styled-components"
import Header from "../header"

const AboutStyled = styled.section`
    div {
        border: solid white;
    }
`;

const About = () => {
    return (
        <AboutStyled>
            
            <div>
                <h2>My Journey</h2>

                <p>
                    Hi! I'm Jonathan Baik, a software engineer from Fairfax, VA.
                </p>

                {/* <p>
                    I have experience in various areas of the tech stack, from designing back-end distributed systems
                    to implementing front-end UX features. 
                </p> */}

                <p>
                    After graduating from <a href="https://vt.edu/" target="_blank">Virginia Tech</a> in the spring 
                    of 2019, I started at Capital One as an entry-level software engineer. While I had internship 
                    experience in various areas of the tech stack -- from designing back-end distributed systems to 
                    implementing front-end UX features -– I was hard-pressed to say I had found my true passion in 
                    the software engineering field at that point.
                    
                </p>

                <p>
                    After leaving Capital One, I set out to find what I could give to the world with
                    my 
                </p>

                <h3>Here are some technologies I've used:</h3>
                <ul className="tech">
                    <li>
                        Java
                    </li>
                    <li>
                        Python
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        HTML + CSS
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        Amazon Web Services
                    </li>
                    <li>
                        Unity
                    </li>
                </ul>

            </div>
        </AboutStyled>
    )
}









export default About