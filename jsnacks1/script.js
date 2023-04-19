const arrNum = []

for (let i = 0 ; i < 6; i++) {
    
    const num = parseInt(prompt('dammi un numero'));
    if (num % 2 == 1) {
        arrNum.push(num);
    }
}