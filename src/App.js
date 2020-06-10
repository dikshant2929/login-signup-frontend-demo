import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Home, Login, SignUp, NotFound, Header } from './pages';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Header>
					<div className="auth-wrapper">
						<Switch>
							<Route exact path='/login-signup-frontend-demo' component={Home} />
							<Route exact path='/' component={Home} />
							<Route exact path="/sign-in" component={Login} />
							<Route exact path="/sign-up" component={SignUp} />
							<Route path='*' component={NotFound} />
						</Switch>
					</div>
				</Header>
			</div>
		</Router>
	);
}

export default App;
