/**
 * Splits hexadecimal color string to RGB channels and returns result as object
 *
 * @param   {String} hex Hexadecimal color string
 * @returns {Object} RGB channels
 */
function hexToRgb(hex) {
    let hexToInt = parseInt(hex, 16);
    let red = (hexToInt >> 16) & 255;
    let green = (hexToInt >> 8) & 255;
    let blue = hexToInt & 255;

    return {red, green, blue};
}

/**
 * Calculates average color of passed hexadecimal colors and returns it as hexadecimal color string
 *
 * @param   {String} hex1 The first hexadecimal color string
 * @param   {String} hex2 The second hexadecimal color string
 * @returns {String} Average hexadecimal color string
 */
function averageColor(hex1, hex2) {
    let rgb1 = hexToRgb(hex1);
    let rgb2 = hexToRgb(hex2);
    let result = {
        red: (rgb1.red + rgb2.red) >> 1,
        green: (rgb1.green + rgb2.green) >> 1,
        blue: (rgb1.blue + rgb2.blue) >> 1
    };

    return (result.red < 10 ? '0' : '') + result.red.toString(16)
        + (result.green < 10 ? '0' : '') + result.green.toString(16)
        + (result.blue < 10 ? '0' : '') + result.blue.toString(16);
}



