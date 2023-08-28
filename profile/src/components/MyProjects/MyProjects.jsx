import React from "react";
import Project from "./Project"

import ecommerce from "../../assets/apps/ecommerce.png";
import searchbar from "../../assets/apps/searchbar.png";
import Emp1 from "../../assets/apps/Emp1.png";
import TodoApp from "../../assets/apps/TodoApp.png";

import { Container, Row, Col } from "react-bootstrap";
import "./MyProjects.css";

const MyProjects = () => {
    const projects = [
        {
            name: "E-Commerce Web",
            logo: ecommerce,
            tags: ["ReactJS", "JavaScript", "API", "Node", "Express", "Bootstrap", "CSS"],
            github: "https://github.com/samarsekhar/Ecommerce",
            live: "https://delicate-khapse-fccacf.netlify.app",
            description: "E-Commerce Web Page Build using MERN Stack"
        },
        {
            name: " Create A Product Search Engine/Bar/Filter",
            logo: searchbar,
            tags: ["HTML", "CSS", "Bootatrap", "DOM", "JavaScript"],
            github: "https://github.com/samarsekhar/JSProjectp",
            live: "https://melodic-blancmange-8531bd.netlify.app",
            description: "Create a product engine built on HTML, CSS, JS"
        },
        {
            name: "Employees Data",
            logo: Emp1,
            tags: ["HTML", "CSS", "JavaScript", "React", "API", "Routes", "Bootstrap"],
            github: "https://github.com/samarsekhar/EmployeesData",
            live: "https://meek-kangaroo-792ad4.netlify.app/",
            description: "Employees Data Store application built on React JS",
        },
        {
            name: "Todo App",
            logo: TodoApp,
            tags: ["HTML", "CSS", "JavaScript", "React", "Context API", "Bootstrap"],
            github: "https://github.com/samarsekhar/TodoApp",
            live: "https://illustrious-bublanina-7f3e8a.netlify.app",
            description: "Todo application built on React JS",
        },
    ]

    return (
        <>
            <Container className="myprojects" id="myprojects">
                <Row>
                    <Col>
                        <h2 className="text-center">My Projects</h2>
                    </Col>
                </Row>
                <Row>
                    {projects.length > 0 ? (
                        <>
                            {projects.map((project) => {
                                return (
                                    <Project projectdetails={project} key={project.name} />
                                )
                            })}
                        </>
                    ) : (
                        <></>
                    )}
                </Row>
            </Container>
        </>
    )
}
export default MyProjects;