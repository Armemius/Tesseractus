import {useContext, useEffect, useRef, useState} from "react";
import {createProgram, createShader, FRAGMENT_SHADER_PATH, VERTEX_SHADER_PATH} from "../util/shaders.js";
import {ConfigStoreContext} from "../main.jsx";
import {observer} from "mobx-react-lite";
import useWindowSize from "../hooks/useWindowSize.js";
import axios from "axios";

const Canvas = observer(() => {
    const canvasRef = useRef(null)
    const [program, setProgram] = useState(null)
    const config = useContext(ConfigStoreContext)
    const [width, height] = useWindowSize()

    // Init webgl canvas
    useEffect(() => {
        const gl = canvasRef.current?.getContext("webgl")
        if (!gl) {
            return
        }
        gl.viewport( 0, 0, width, height );

        Promise.all([
            axios.get(VERTEX_SHADER_PATH),
            axios.get(FRAGMENT_SHADER_PATH)
        ]).then(responses => {
            const [vertexShaderText, fragmentShaderText] = responses.map(r => r.data)
            const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderText)
            const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderText)
            const program = createProgram(gl, vertexShader, fragmentShader)
            gl.useProgram(program)
            setProgram(program)
        });
    }, [canvasRef, height, width])

    // Render
    useEffect(() => {
        if (!program) {
            return
        }
        const gl = canvasRef.current.getContext("webgl")

        const resolutionLocation = gl.getUniformLocation(program, 'resolution')
        gl.uniform2f(resolutionLocation, width, height);

        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        // TODO

    }, [program, config, width, height])

    return (
        <canvas ref={canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}
        />
    );
});

export default Canvas;