import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Block from "../components/Block";
import { faBookOpen, faMedal } from '@fortawesome/free-solid-svg-icons';
import API from '../utils/API';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstname: "",
        }
    }

    componentDidMount() {
        this.userFirstName();
    }

    userFirstName = async () => {
        const user = (await API.getUserData()).data;
        this.setState({
            firstname: user.firstname
        })
    }

    render() {
        return (
            <Container className="my-auto">
                <Row>
                    <Col sm="12" style={{ textAlign: 'center' }}>
                        <h1>Hello, {this.state.firstname}</h1>
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
}

export default Home;
