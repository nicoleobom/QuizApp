import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';
import QuizMenu from './pages/QuizMenu';
import Difficulty from './pages/Difficulty';
import Quiz from './pages/Quiz';
import LeaderboardMenu from './pages/LeaderboardMenu';
import api from './utils/API';
// import Loading from './components/Loading/index';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			signedIn: false,
		}
	}

	componentDidMount = () => {
		this.getUsers();
	}

	getUsers = async () => {
		try {
			const response = await api.authenticate();
			if (response.status === 401) this.props.history.push("/signin");
			else this.setState({ signedIn: true });
		} catch (err) {
			console.log(err);
			this.props.history.push("/signin");
		}
	}

	render() {
		return (
			<div className="vh-100 d-flex flex-column">
				<Header isSignedIn={this.state.signedIn}/>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/settings" component={Settings} />
					<Route exact path="/signin" component={SignIn} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/quizzes" component={QuizMenu} />
					<Route exact path="/quizzes/:subject" component={Difficulty} />
					<Route exact path="/quizzes/:subject/:level" component={Quiz} />
					<Route exact path="/leaderboard" component={LeaderboardMenu} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
