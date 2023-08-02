#version 100

precision mediump float;

uniform vec2 u_resolution;

varying vec4 v_color;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    gl_FragColor = v_color;
}