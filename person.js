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
      console.log(`I have handling grade ${grade} in maths`);
    }
  
  }

  const obj1 = new Tutor('Kavya Karuppusamy', 'Math');
obj1.introduceSelf();  

obj1.grade(); 

class Employee{
  constructor(name,sub,rating){
        this.name= name;
        this.sub =sub;
        this.rating =rating;
  }

 companyEmployee(){
console.log(`${this.name} is a good Tutor in our company.
She is handling ${Math.floor(Math.random()*5+8)} in ${this.sub}.
She got a good rating as ${this.rating}`)
 }

 rockPerformance(company){
     console.log(`she is doing great progress in our company ${company}.`)
 }
 
}
let details = new Employee("Kavya K","Mathematics","5/5")
details.companyEmployee();
details.rockPerformance("Focus Edumatics PVT LTD");