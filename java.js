//1
const mas = [1,2,3]
mas[1] = 10
console.log(mas)

//2

const hD2 = ['phone','pc','red']
hD2.push()
console.log(hD2)

//3

const numbers = [10, 20, 30, 40, 50];

function calculateSum(arra) {
    let sum = 0;
    for (let i = 0; i < arra.length; i++) {
        sum += arra[i];
    }
    return sum;
}

let totalSum = calculateSum(numbers);
console.log("Сума чисел у масиві:", totalSum);

//4

const god = [1,2,3,4,5]

for (let i = 0; i < god.length; i++) {
    console.log(god[i])
};

//5

const gabum = ['Hello','World','Hi','helloWorld','HelloWorld']

gabum.forEach(ok => {
    if (ok.length > 5) {
        console.log(ok);
    }
});

//6

const masiw = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

masiw.forEach(gr => {
    if (gr % 2 === 0) {
        console.log(gr);
    }
});