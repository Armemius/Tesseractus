export const TESSERACT_PLANES = [
    [
        -1, -1, -1, -1,
        -1, 1, -1, -1,
        1, 1, -1, -1,
        1, -1, -1, -1
    ], [
        -1, -1, 1, -1,
        -1, 1, 1, -1,
        1, 1, 1, -1,
        1, -1, 1, -1
    ], [
        -1, -1, -1, -1,
        1, -1, -1, -1,
        1, -1, 1, -1,
        -1, -1, 1, -1
    ], [
        -1, 1, -1, -1,
        1, 1, -1, -1,
        1, 1, 1, -1,
        -1, 1, 1, -1
    ], [
        -1, -1, -1, -1,
        -1, 1, -1, -1,
        -1, 1, 1, -1,
        -1, -1, 1, -1
    ], [
        1, -1, -1, -1,
        1, 1, -1, -1,
        1, 1, 1, -1,
        1, -1, 1, -1
    ], [
        -1, -1, -1, 1,
        -1, 1, -1, 1,
        1, 1, -1, 1,
        1, -1, -1, 1
    ], [
        -1, -1, 1, 1,
        -1, 1, 1, 1,
        1, 1, 1, 1,
        1, -1, 1, 1
    ], [
        -1, -1, -1, 1,
        1, -1, -1, 1,
        1, -1, 1, 1,
        -1, -1, 1, 1
    ], [
        -1, 1, -1, 1,
        1, 1, -1, 1,
        1, 1, 1, 1,
        -1, 1, 1, 1
    ], [
        -1, -1, -1, 1,
        -1, 1, -1, 1,
        -1, 1, 1, 1,
        -1, -1, 1, 1
    ], [
        1, -1, -1, 1,
        1, 1, -1, 1,
        1, 1, 1, 1,
        1, -1, 1, 1
    ], [
        -1, -1, -1, -1,
        1, -1, -1, -1,
        1, -1, -1, 1,
        -1, -1, -1, 1
    ], [
        -1, 1, -1, -1,
        1, 1, -1, -1,
        1, 1, -1, 1,
        -1, 1, -1, 1
    ], [
        -1, -1, -1, -1,
        -1, -1, 1, -1,
        -1, -1, 1, 1,
        -1, -1, -1, 1
    ], [
        -1, 1, -1, -1,
        -1, 1, 1, -1,
        -1, 1, 1, 1,
        -1, 1, -1, 1
    ], [
        -1, -1, 1, -1,
        1, -1, 1, -1,
        1, -1, 1, 1,
        -1, -1, 1, 1
    ], [
        -1, 1, 1, -1,
        1, 1, 1, -1,
        1, 1, 1, 1,
        -1, 1, 1, 1
    ],
    // SUS
    [
        1, -1, -1, -1,
        1, -1, 1, -1,
        1, -1, 1, 1,
        1, -1, -1, 1
    ], [
        1, 1, -1, -1,
        1, 1, 1, -1,
        1, 1, 1, 1,
        1, 1, -1, 1
    ], [
        1, -1, 1, -1,
        1, 1, 1, -1,
        1, 1, 1, 1,
        1, -1, 1, 1
    ],
    [
        -1, -1, -1, -1,
        -1, 1, -1, -1,
        -1, 1, -1, 1,
        -1, -1, -1, 1
    ], [
        1, -1, -1, -1,
        1, 1, -1, -1,
        1, 1, -1, 1,
        1, -1, -1, 1
    ], [
        -1, -1, 1, -1,
        -1, 1, 1, -1,
        -1, 1, 1, 1,
        -1, -1, 1, 1
    ],
].reverse()

export const TEXTURE_COORDINATES = [
    0, 1,
    1, 0,
    0, 0,

    0, 1,
    1, 1,
    1, 0,
]

export const PLANE_COLORS = [
    [1, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 0, 1],
    [0, 0, 1],
    [1, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 0, 1],
    [0, 0, 1],

    [1, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 0, 1],
    [0, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 1],
    [0, 1, 1],
    [1, 1, 0],
    [1, 1, 0],
].reverse()