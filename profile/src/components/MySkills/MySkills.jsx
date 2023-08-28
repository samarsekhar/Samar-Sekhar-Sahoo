import React from "react";
import "../MySkills/MySkills.css";
import Skills from "../MySkills/Skills";

import html from "../../assets/logos/html.png";
import css from "../../assets/logos/css.png";
import js from "../../assets/logos/js.png";
import react from "../../assets/logos/react.png";
import bs from "../../assets/logos/bs.png";
import redux from "../../assets/logos/redux.png";
import express from "../../assets/logos/express.png";
import node from "../../assets/logos/node.png";
import mongodb from "../../assets/logos/mongodb.png";
import git from "../../assets/logos/git.png";
import github from "../../assets/logos/github.png";
import { Container, Row, Col } from "react-bootstrap";

const MySKills = () => {
    const skills = [
        { name: "HTML", logo: html },
        { name: "CSS", logo: css },
        { name: "JAVASCRIPT", logo: js },
        { name: "ReactJS", logo: react },
        { name: "Bootstrap", logo: bs },
        { name: "Redux", logo: redux },
        { name: "express", logo: express },
        { name: "NodeJS", logo: node },
        { name: "mongodb", logo: mongodb },
        { name: "Git", logo: git },
        { name: "Github", logo: github },
    ];

    return (
        <>
            <Container className="my-4 myskills">
                <Row>
                    <Col className="text-center">
                        <h2>My Skills</h2>
                    </Col>
                </Row>
                <Row>
                    {skills.length > 0 ? (
                        <>
                            {skills.map((skill) => {
                                return (
                                    <Skills name={skill.name}
                                        logo={skill.logo}
                                        key={skill.name}
                                    />
                                );
                            })}
                        </>
                    ) : null}
                </Row>
            </Container>
        </>
    )
}
export default MySKills;
