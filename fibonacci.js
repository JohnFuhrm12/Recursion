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
    console.log(fibs);
    return fibs;
};

fibs(10);

// node fibonacci.js