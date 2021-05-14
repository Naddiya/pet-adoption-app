import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Nmichou" animal="Fox" breed="Fennec" />
            <Pet name="Coco" animal="Parrot" breed="Gabonese" />
            <Pet name="Piouf" animal="Cat" breed="Vagabond" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
