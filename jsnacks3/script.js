const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (let i = 0; i < arrNums.length; i++) {
    if (i % 2 == 1) {
        sum += arrNums[i];
    }
}

console.log(sum);