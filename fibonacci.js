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
        console.log([first]);
        return [first];
    } else {
        console.log(fibs);
        return fibs;
    };
};

fibs(10);

// VSCode Instructions: Input a positive number in fibs(), run terminal command: node fibonacci.js 