import './App.css'
import Canvas from "./components/Canvas.jsx";
import {useContext} from "react";
import {ConfigStoreContext} from "./main.jsx";
import ConfigMenu from "./components/ConfigMenu.jsx";

function App() {
    const config = useContext(ConfigStoreContext)

    return (
        <main>
            <Canvas/>
            <ConfigMenu/>
        </main>
    )
}

export default App
