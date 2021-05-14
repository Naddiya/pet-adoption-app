const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, "Tricky"),
        React.createElement("h3", {}, "Dog"),
        React.createElement("h3", {}, "Braque"),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
