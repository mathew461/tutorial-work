const add =  (a, b) => {
    return a + b;
};
console.log(add(55, 1));



const user = {
    name: 'John',
    cities: ['philadelphia', 'Blackpool', 'London'],
    printPlacesLived() {
     return this.cities.map((city) => this.name + 'has lived in' + city);
    }
}

console.loh(user.printPlacesLived());    


const multiplier = {
     numbers: [1, 2, 3],
     multiplyBy: 3,
     multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
     }
};


console.log(multiplier.multiply())

