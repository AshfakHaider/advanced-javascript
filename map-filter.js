const numbers = [4, 5, 8, 12, 16];

const result = numbers.map(function(element){
    return element * element ;
})

const result2 = numbers.map(element => element * element);

const result3 = numbers.filter( element => element > 10);]
const result4 = numbers.find(element => element > 10);
console.log(result4);