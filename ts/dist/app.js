"use strict";
class User {
    name;
    phone;
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}
// const user1 = new User('Ali','03212254478')
// console.log("🚀 ~ user1:", user1)
// class Student {
//     name:String
//     phone:String
//     age:Number
//     id:Number
//     constructor(name:string,phone:string,age:Number,id:Number){
//         this.name =name
//         this.phone = phone
//         this.age = age
//         this.id = id
//     }
// }
// class Student extends User {
//     age:Number
//     id:Number
//     constructor(name:string,phone:string,age:Number,id:Number){
//         super(name,phone)
//         this.age = age
//         this.id = id
//     }
// }
// const result = new Student('Ali','031122222',21,212)
// console.log("🚀 ~ result:", result)
// class Parent {
//     religion:string;
//     constructor(religion:string){
//         this.religion = religion
//     }
// }
// class Child extends Parent {
//     name:string;
//     gender:string
//     constructor(religion:string,name:string,gender:string){
//         super(religion)
//         this.name = name
//         this.gender = gender
//     }
// }
// const result = new Child('Islam','Ali','Male')
// console.log("🚀 ~ result:", result)
class Car {
    name;
    constructor() {
        this.name = 'BMW';
    }
}
const result = new Car();
console.log("🚀 ~ result:", result);
