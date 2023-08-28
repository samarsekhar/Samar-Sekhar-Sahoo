import React from "react";
import "../MySkills/MySkills.css";
import { Col } from "react-bootstrap";

const Skills = ({ name, logo }) => {
    return (
        <>
            <Col lg={3}>
                <div className="skills">
                    <img src={logo} alt="" />
                    {name}
                </div>
            </Col>
        </>
    )
}
export default Skills;