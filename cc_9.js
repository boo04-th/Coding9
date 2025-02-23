//Task 1: Creating an Employee Class
class Employee {
    constructor(name, id, department, salary){ //Constructor setting up specified properties
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary=salary;
}
    getDetails() { //Setting up getDetails method
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
 }

    calculateAnnualSalary() { //Setting up calculateAnnualSalary 
        return this.salary * 12; //Returning employee's salary 
 }
}

//Test case for Task 1
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log(emp1.calculateAnnualSalary()); // Expected output: 60000

//Task 2: Creating a Manager Class (Inheritance & Method Overriding)
class Manager extends Employee { //Creating class Mangager extending from Employee
    constructor(name, id, department, salary, teamSize){ //Constructor setting up specified properties
        super(name, id, department, salary); //Inheriting from Employee using super
        this.teamSize = teamSize; //Adding teamSize
    } 
    getDetails(){ //Setting up new getDetails method including teamSize
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`; //Returning employee details
    }
    calculateBonus(){
        return this.calculateAnnualSalary()*0.10; //Calculating bonus as ten percent of annual salary
    }
}

//Test cases
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log(mgr1.calculateBonus()); // Expected output: 9600