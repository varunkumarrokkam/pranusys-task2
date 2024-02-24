

function factorial(num) {
    return num === 0  ||  num  === 1 ?  1  :  num *  factorial(num - 1);

}
const num = 5;
const result = factorial(num);
console.log(`The factorial of number ${num} is ` + result);