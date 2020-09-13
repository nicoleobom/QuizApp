import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Block from "../components/Block";
import { faBookOpen, faMedal } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <Container className="my-auto">
            <Row>
                <Col sm="12">
                    <h1>Hello</h1>
                </Col>
            </Row>
            <Row>
                <Col sm="12">
                    <Block link="/quizzes" name="Quizzes" icon={faBookOpen} />
                </Col>
            </Row>
            <Row>
                <Col sm="12">
                    <Block link="/leaderboard" name="Leaderboard" icon={faMedal} />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
