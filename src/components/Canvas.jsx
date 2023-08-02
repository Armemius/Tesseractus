import {useContext, useEffect, useRef, useState} from "react"
import {createProgram, createShader, FRAGMENT_SHADER_PATH, VERTEX_SHADER_PATH} from "../util/shaders.js"
import {ConfigStoreContext} from "../main.jsx"
import useWindowSize from "../hooks/useWindowSize.js"
import axios from "axios"
import {observer} from "mobx-react-lite";
import {AXIS, PLANE_COLORS, TESSERACT_PLANES} from "../util/tesseract.js";

const Canvas = () => {
    const canvasRef = useRef(null)
    const [program, setProgram] = useState(null)
    const [locations, setLocations] = useState(null)
    const config = useContext(ConfigStoreContext)
    const [width, height] = useWindowSize()

    const handleMouse = ev => {
        if (ev.buttons === 0) {
            return
        }
        config.setAngleXZ(config.angleXZ - ev.movementX / 100 * Math.cos(config.angleYZ))
        config.setAngleYZ(config.angleYZ + ev.movementY / 100)
    }

    // Init webgl canvas
    useEffect(() => {
        const gl = canvasRef.current?.getContext("webgl")
        if (!gl) {
            return
        }

        Promise.all([
            axios.get(VERTEX_SHADER_PATH),
            axios.get(FRAGMENT_SHADER_PATH)
        ]).then(responses => {
            const [vertexShaderText, fragmentShaderText] = responses.map(r => r.data)
            const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderText)
            const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderText)
            const program = createProgram(gl, vertexShader, fragmentShader)

            const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')
            const colorAttributeLocation = gl.getAttribLocation(program, 'a_color')
            const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution')
            const rotateXYUniformLocation = gl.getUniformLocation(program, 'u_rotate_xy')
            const rotateXZUniformLocation = gl.getUniformLocation(program, 'u_rotate_xz')
            const rotateXWUniformLocation = gl.getUniformLocation(program, 'u_rotate_xw')
            const rotateYZUniformLocation = gl.getUniformLocation(program, 'u_rotate_yz')
            const rotateYWUniformLocation = gl.getUniformLocation(program, 'u_rotate_yw')
            const rotateZWUniformLocation = gl.getUniformLocation(program, 'u_rotate_zw')

            setLocations({
                attributePosition: positionAttributeLocation,
                attributeColor: colorAttributeLocation,
                resolutionUniform: resolutionUniformLocation,
                rotateXYUniform: rotateXYUniformLocation,
                rotateXZUniform: rotateXZUniformLocation,
                rotateXWUniform: rotateXWUniformLocation,
                rotateYZUniform: rotateYZUniformLocation,
                rotateYWUniform: rotateYWUniformLocation,
                rotateZWUniform: rotateZWUniformLocation
            })

            gl.useProgram(program)
            setProgram(program)
            console.info("Shaders - OK")
        })
    }, [canvasRef])

    // Render
    useEffect(() => {
        if (!program || !locations) {
            return
        }
        const gl = canvasRef.current.getContext("webgl")

        // Helper functions
        const drawTesseractWireframe = (gl, positions, color) => {
            const positionBuffer = gl.createBuffer()
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.DYNAMIC_DRAW)
            gl.enableVertexAttribArray(locations.attributePosition)
            gl.vertexAttribPointer(locations.attributePosition, 4, gl.FLOAT, false, 0, 0)

            const colorBuffer = gl.createBuffer()
            gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
            let colors = [
                1, 1, 1, 1,
                1, 1, 1, 1,
                1, 1, 1, 1,
                1, 1, 1, 1,
            ]
            if (color) {
                colors = [...color, ...color, ...color, ...color]
            }
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW)
            gl.enableVertexAttribArray(locations.attributeColor)
            gl.vertexAttribPointer(locations.attributeColor, 4, gl.FLOAT, false, 0, 0)
            gl.drawArrays(gl.LINE_LOOP, 0, 4)
        }

        const drawTesseractPlane = (gl, positions, color) => {
            const positionBuffer = gl.createBuffer()
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

            const v1 = positions.slice(0, 4)
            const v2 = positions.slice(4, 8)
            const v3 = positions.slice(8, 12)
            const v4 = positions.slice(12, 16)

            positions = [...v1, ...v3, ...v4, ...v1, ...v2, ...v3]

            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.DYNAMIC_DRAW)
            gl.enableVertexAttribArray(locations.attributePosition)
            gl.vertexAttribPointer(locations.attributePosition, 4, gl.FLOAT, false, 0, 0)

            const colorBuffer = gl.createBuffer()
            gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
            const colors = [...color, ...color, ...color, ...color, ...color, ...color]
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW)
            gl.enableVertexAttribArray(locations.attributeColor)
            gl.vertexAttribPointer(locations.attributeColor, 4, gl.FLOAT, false, 0, 0)
            gl.drawArrays(gl.TRIANGLES, 0, 6)
        }

        const reloadUniform = () => {
            gl.uniform2f(locations.resolutionUniform, width, height)
            gl.uniform1f(locations.rotateXYUniform, config.angleXY)
            gl.uniform1f(locations.rotateXZUniform, config.angleXZ)
            gl.uniform1f(locations.rotateXWUniform, config.angleXW)
            gl.uniform1f(locations.rotateYZUniform, config.angleYZ)
            gl.uniform1f(locations.rotateYWUniform, config.angleYW)
            gl.uniform1f(locations.rotateZWUniform, config.angleZW)
        }

        // Actual render
        gl.viewport(0, 0, width, height)
        reloadUniform()
        gl.enable(gl.BLEND)
        gl.blendEquation(gl.FUNC_ADD);
        gl.blendFunc(gl.ONE_MINUS_CONSTANT_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.clearColor(0, 0, 0, 1)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

        AXIS.forEach((points, it) => {
            drawTesseractWireframe(gl, points, [...PLANE_COLORS[it % 6], 1])
        })
        TESSERACT_PLANES.forEach((points, it) => {
            //drawTesseractPlane(gl, points, [...PLANE_COLORS[it % 6], 0.5])
        })
        TESSERACT_PLANES.forEach(points => {
            drawTesseractWireframe(gl, points)
        })
    }, [config.angleXW, config.angleXY, config.angleXZ, config.angleYW, config.angleYZ, config.angleZW, height, locations, program, width])

    return (
        <>
            <canvas ref={canvasRef}
                    width={window.innerWidth}
                    height={window.innerHeight}
                    onMouseMove={handleMouse}
            />
        </>

    )
}

export default observer(Canvas)