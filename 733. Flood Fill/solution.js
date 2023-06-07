/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color, oldColor = image[sr][sc]) {
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length || image[sr][sc] === color || image[sr][sc] !== oldColor) return image

    image[sr][sc] = color

    floodFill(image, sr+1, sc, color, oldColor)
    floodFill(image, sr-1, sc, color, oldColor)
    floodFill(image, sr, sc+1, color, oldColor)
    floodFill(image, sr, sc-1, color, oldColor)

    return image
};