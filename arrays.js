let text = "Hello, how are u doing?"
let reverseText = text.split("").reverse().join("") // reverse() works inly after we made an array from string. 
alert(reverseText)


let cars =["bmw", "mercedes benz", "ford"]

let upperCars = cars.map(function(car) {
    return car.toUpperCase()
})
alert(upperCars)
//эту функцию можно переписать, как
 //let upperCars = cars.map(car=> {
//    return car.toUpperCase()
//})
//alert(upperCars)
