// creation

let obj1={
    name :'jay',
    age:5,
}

// obj1.name='riya'


obj1.play='cricket'
console.log(obj1)
obj1.naughty=true
console.log(obj1)


// update
obj1.naughty=false
console.log(obj1)

// deletion
let obj = {
    name: 'hari',
    age: 4,
}

delete obj.name
console.log(obj)


// to change /update

// can assign  value directly
// or
// obj1['name']=    'new name'
// console.log(obj1)


// Multi word property access
// note:when we want to keep name in space so we can write in String.


let students = {
    " first Name": 'stuort',
    "last Name": 'little'
}
console.log(students)

// to access

// menu['veg']     menu=obj,veg=value

// property value shorthand

function stu1(name, age) {

    let obj = {
        name: name,
        age: age
    }
    return obj
}

let h = stu1('mm', 23)
console.log(h)

// es6 version

function stu2(name, age) {

    let obj = {
        name,
        age
    }
    return obj
}
let g = stu2('mm', 20)
console.log(g)

// property names limitation



// keys in object
let menu = {
    veg: 'potato',
    breakfast: 'fried rice',
    lunch: 'tomato',
    dinner: 'capsicum'
}
console.log('lunch' in menu)    //true    : if found then it will show true.

// for in loop

for (let i in menu)
    console.log("for in "+menu[i])




//Q. create an empty obj with name user 

let user = {
    name: 'john',
    surname: 'smith',
}

// change with 'peter'
// delete name from user object 

user['name'] = 'Peter'
delete user.name
console.log(user)


// Q. sum of all the salary using for in loop

let sal = {
    john: 100,
    ann: 160,
    pete: 140,
}


let sum=0
for (let i in sal) {        //here i=key   
//   console.log(sal[s])
  sum=sum+sal[i]
 
}

console.log(sum)





// practice 



// constructor