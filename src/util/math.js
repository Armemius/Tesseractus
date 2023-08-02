export const rad2deg = (rad) => {
    while (rad < 0) {
        rad += Math.PI * 2
    }
    return rad * 360 / (Math.PI * 2) | 0
}

export const deg2rad = (deg) => {
    while (deg < 0) {
        deg += 360
    }
    return deg * 2 * Math.PI / 360
}