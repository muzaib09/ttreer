// const input = <HTMLInputElement>document.querySelector("#inp")
// console.log("🚀 ~ input:", input.value = "hello")


// const heading = <HTMLHeadingElement>document.querySelector("#heading")  
// console.log("🚀 ~ heading:", heading.innerHTML = 'hello')


// const para = <HTMLParagraphElement>document.querySelector("#para")  
// console.log("🚀 ~ heading:", heading.innerHTML = 'hello')


// function Student(name,age) {
// this.name = 'Ali';
// this.age = 10
// }

class Student {
  name: string;
  age: number;
  constructor(param1: string, param2: number) {
    this.name = param1;
    this.age = param2
  }
}

const firstStudent = new Student("Ali", 10);
console.log(firstStudent);