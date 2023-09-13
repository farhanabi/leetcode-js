/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = new Array(9).fill().map(() => new Set());
    const cols = new Array(9).fill().map(() => new Set());
    const boxes = new Array(9).fill().map(() => new Set());
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                const num = parseInt(board[i][j]) - 1;
                const k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (rows[i].has(num) || cols[j].has(num) || boxes[k].has(num)) {
                    return false;
                }
                rows[i].add(num);
                cols[j].add(num);
                boxes[k].add(num);
            }
        }
    }
    return true;
};