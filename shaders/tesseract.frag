#version 100

precision mediump float;

uniform vec2 u_resolution;
uniform sampler2D u_texture;

uniform int u_use_texture;

varying vec4 v_color;
varying vec2 v_texcoord;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    if (u_use_texture == 0) {
        gl_FragColor = v_color;
    } else {
        gl_FragColor = texture2D(u_texture, v_texcoord);
    }
}