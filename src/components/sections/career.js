import React from "react"
import Header from "../header"
import styled from "styled-components"

const CareerStyled = styled.section`
    div {
        border: solid white;
    }
`;

const Career = () => {
    return (
        <CareerStyled>
            <div className="">
                <h1>Career</h1>

                <ul>
                    <li>
                        <h3>Capital One</h3>
                        <h4>Associate Software Engineer</h4>
                        <h5>August 2019 - November 2020</h5>
                        <p>i did stuff</p>
                    </li>
                    <li>
                        <h3>Microstrategy, Inc.</h3>
                        <h4>Software Engineer Intern</h4>
                        <h5>May - August 2018</h5>
                        <p>i did stuff</p>
                    </li>
                    <li>
                        <h3>BIT Systems (CACI, Inc.)</h3>
                        <h4>Software Engineer Intern</h4>
                        <h5>May - August 2017</h5>
                        <p>i did stuff</p>
                    </li>
                </ul>
            </div>

        </CareerStyled>
    )
}









export default Career