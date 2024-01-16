// // console.log('hello')

// // alert('hello from the alert')

// // let name = prompt('your name')
// // // console.log(name)
// // alert ('Welcome: ' + name)


// // let age =confirm('is your age 24?')
// // console.log(age)
// // alert('welcome')

// let year=prompt('your age')

// if(year>=18){
//     alert('eligible')

// }else {
//     alert('non eligible')
// }


// objects:

// objct properties

// example:1
const person = {
    name: 'Raju',
    age: 20,
    city: 'Bhopal',
    friends: ['Shyam', 'Babubhayia'],
    hobbies: ['football', 'Singing', 'dancing', 'reading'],
    info: function () {
        return (this.name + " " + this.hobbies[2] + " " + this.city)
    }
}
person.city='Indore'
console.log(person.info())

// example:2
let student = {
    name: "John",
    age: 20,
    grade: "A",
    sayHello: function () {
        console.log("Hello, I'm " + this.name);
    }
};

student.sayHello()


//  in the case of array and object we can update const. 
const arr=[1,2,3,4,5];
arr[3]=8
console.log(arr[3])

// Array methods
 