import React from "react";
import "../Home/Home.css";
import { Col, Container, Row} from "react-bootstrap";

const Home = () => {
    return (
        <>
        <Container id="home">
            <Row>
                <Col>
                <div className="home text-center">
                    <div className="heading">
                        <h2 className="slide-up">Hello I'm</h2>
                        <h1 className="slide-up">Samar Sekhar Sahoo</h1>
                        <h2 className="slide-up">A Full Stack Developer</h2>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Home;