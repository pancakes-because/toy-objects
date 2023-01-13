//"REPRESENTING TOYS AS OBJECTS" EXERCISE

const stuffedAnimals =  {
    id: 1,
    name: "stuffed animals",
    popularityWithKids: "high", 
    averagePrice: 19.99,
    toyInStock: true
}

const boardGames = {
    id: 2,
    name: "board games",
    popularityWithKids: "high", 
    averagePrice: 29.99, 
    toyInStock: true
}

const costumes = {
    id: 3,
    name: "costumes",
    popularityWithKids: "high", 
    averagePrice: 15.99, 
    toyInStock: true  
}

//"TOY COLLECTION" EXERCISE

const toys = [

{
    id: 1,
    name: "stuffed animals", 
    popularityWithKids: "high", 
    averagePrice: 19.99,
    toyInStock: true
}, 
{
    id: 2,
    name: "board games", 
    popularityWithKids: "high", 
    averagePrice: 29.99, 
    toyInStock: true
}, 
{
    id: 3,
    name: "costumes", 
    popularityWithKids: "high", 
    averagePrice: 15.99, 
    toyInStock: true  
} 

] 

console.log(toys)

//"DISPLAYING TOY PROPERTIES" EXERCISE 

for (const toy of toys) {
    console.log(`${toy.name}`)
}

//"NEW TOYS" EXERCISE

// const newToys = [

// { 
//     id: 4, 
//     name: "legos", 
//     popularityWithKids: "medium", 
//     averagePrice: 39.99, 
//     toyInStock: true
// }, 
// { 
//     id: 5, 
//     name: "dolls", 
//     popularityWithKids: "high", 
//     averagePrice: 29.99, 
//     toyInStock: true

// }
// ]

// toys.push(newToys)
// console.log(toys)


const newToyOne = { 

        id: 4, 
        name: "legos", 
        popularityWithKids: "medium", 
        averagePrice: 39.99, 
        toyInStock: true

    }

const newToyTwo = { 

    id: 5, 
    name: "dolls", 
    popularityWithKids: "high", 
    averagePrice: 29.99, 
    toyInStock: true

}

toys.push(newToyOne)
toys.push(newToyTwo)
console.log(toys)

//"TOY CATALOGUE" EXERCISE 

for (toy of toys) {
    console.log(`The ${toy.name} have ${toy.popularityWithKids} popularity with kids, 
    and have an average price of ${toy.averagePrice}.`)
}

//"RAISING PRICES" EXERCISE 

for (toy of toys) {
    toy.averagePrice = toy.averagePrice * (1 + 0.05)
    console.log(`The ${toy.name} have an average price of ${toy.averagePrice} after 
    the 5% increase.`) 
}

//"HELPING CUSTOMERS FIND THE RIGHT TOY" EXERCISE

const toyToFind = 4

for (toy of toys) {
    if (toy.id === toyToFind) {
        toy.averagePrice = toy.averagePrice * (1 +0.05)
        console.log(toy)

    } 
}