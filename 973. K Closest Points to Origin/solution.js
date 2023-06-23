/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const distances = [];
    for (const [x, y] of points) {
        distances.push([x, y, Math.sqrt(x * x + y * y)]);
    }

    distances.sort((a, b) => a[2] - b[2]);

    const result = [];
    for (let i = 0; i < k; i++) {
        result.push([distances[i][0], distances[i][1]]);
    }

    return result;
};