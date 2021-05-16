import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
    return (
        <div>
            <Router>
                <header>
                    <Link to="/">Adopt Me!</Link>
                </header>
                <Switch>
                    <Route path="/details/:id">
                        <Details />
                    </Route>
                    <Route path="/">
                        <SearchParams />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);
