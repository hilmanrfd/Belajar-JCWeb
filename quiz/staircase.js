

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
   let string = "";
    for (let j = n; j > 0; j--) {
        for (let i = 1; i <= n; i++) {
            if (i < j) {
                string += " ";
                continue;
            }
        string += "#";
        }
    if (j === 1) {
        continue;
    }

    string += "\n";
    }
console.log(string);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
