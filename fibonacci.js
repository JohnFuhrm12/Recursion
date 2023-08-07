function fibs(num) {
    let first = 0;
    let second = 1;
    let sum = 0;
    let fibs = [0, 1];

    for (let i = 0; i < num - 2; i++) {
        sum = first + second;
        first = second;
        second = sum;
        fibs.push(sum);
    };
    
    if (num === 1) {
        return [first];
    } else {
        return fibs;
    };
};


function fibsRec(num) {
    if (num == 1) {
        return [0, 1];
    };

    const arr = fibsRec(num - 1);
    return [...arr, arr[num - 1] + arr[num - 2]];
};

console.log(fibs(10));
console.log(fibsRec(10));

// VSCode Instructions: Input a positive number in fibs()/fibsRec(), run terminal command: node fibonacci.js 