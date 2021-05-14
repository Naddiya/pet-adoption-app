import React from 'react'
import ReactDOM from 'react-dom'


const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", { id: "my brand" }, "Adopt me!"),
        React.createElement(Pet, {
            name: "Nmichou",
            animal: "Fox",
            breed: "Fennec",
        }),
        React.createElement(Pet, {
            name: "Coco",
            animal: "Parrot",
            breed: "Gabonese",
        }),
        React.createElement(Pet, {
            name: "Piouf",
            animal: "Cat",
            breed: "Vagabond",
        }),
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
