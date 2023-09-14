/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    const indices = new Array(position.length);
    for (let i = 0; i < position.length; i++) {
        indices[i] = i;
    }
    indices.sort((i, j) => position[j] - position[i]);
    let res = 0,
        time = 0;
    for (const i of indices) {
        const t = (target - position[i]) / speed[i];
        if (t > time) {
            time = t;
            res++;
        }
    }
    return res;
};
