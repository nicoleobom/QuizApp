import React from "react";
import { Jumbotron } from 'react-bootstrap';
import '../index.css';
import { List, ListItem } from '../components/LeaderboardTable';
import API from '../utils/API';


class LeaderboardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        API.getUsers(this.state.users)
            .then(res => {
                console.log(res.data);

                if (res.data.length === 0) {
                    throw new Error("No data found");
                }
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                
                let scoreArray = [];

                for (var i=0; i < res.data.length; i++) {
                    if (res.data[i].scores.length !== 0) {
                        scoreArray.push(res.data[i])
                    } 
                }

                console.log(scoreArray);

                this.setState({
                    users: scoreArray
                })
            })
    }

    renderUsers() {
        return this.state.users.map(user => (
            <ListItem key={user._id}>{user.username}</ListItem>
        ))
    }

    renderScores() {
        return this.state.users.map(user => (
            <ListItem key={user._id} className="scoreItem">{user.scores[0].score}</ListItem>
        ))
    }

    render() {
        return (

                <Jumbotron className="jumbo">
                    <h2>Leaderboard</h2>
                    <div className="row justify-content-center align-self-center">
                        <div className="col-sm-6 col-xs-6 listScores">
                            <List className="listStyle">{this.renderScores()}</List>
                        </div>
                        <div className="col-sm-6 col-xs-6 list">
                            <List className="listStyle">{this.renderUsers()}</List>
                        </div>
                    </div>
                </Jumbotron>
        );
    }
}

export default LeaderboardMenu;