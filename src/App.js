import { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';

const App = () => {
    const theme = useState("darkSlateBlue");
    return (
        <ThemeContext.Provider value={theme}>
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
        </ThemeContext.Provider>
    );
};

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);
