import React from "react";
import { Container, Row } from "react-bootstrap";
// import Block from "../components/Block";
import DiffBlock from "../components/DiffBlock";


function Difficulty(props) {
    const { subject } = props.match.params
    return (
        <Container className="my-auto">
            <Row className="d-flex justify-content-center">
                <DiffBlock link={`/quizzes/${subject}/1`} name="Level 1"  />
            </Row>
            <Row className="d-flex justify-content-center">
                <DiffBlock link={`/quizzes/${subject}/2`} name="Level 2"  />
            </Row>
            <Row className="d-flex justify-content-center">
                <DiffBlock link={`/quizzes/${subject}/3`} name="Level 3"  />
            </Row>
            <Row className="d-flex justify-content-center">
                <DiffBlock link={`/quizzes/${subject}/4`} name="Level 4"  />
            </Row>
            <Row className="d-flex justify-content-center">
                <DiffBlock link={`/quizzes/${subject}/5`} name="Level 5"  />
            </Row>
        </Container>
    );
}

export default Difficulty;
