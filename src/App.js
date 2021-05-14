import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

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
