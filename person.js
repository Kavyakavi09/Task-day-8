class Person {

    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  
  }
  const obj = new Person('Kavya');

// obj.introduceSelf(); 

class Tutor extends Person {

    constructor(name, teaches) {
       super(name);
      this.teaches = teaches;
    }
  
    introduceSelf() {
      console.log(`My name is ${this.name}, and I will be your ${this.teaches} Tutor.`);
    }
  
    grade(paper) {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
      console.log(grade);
    }
  
  }

  const obj1 = new Tutor('Kavya', 'Math');
obj1.introduceSelf();  

obj1.grade(); 