//Task 1: Creating an Employee Class
class Employee {
    constructor(name, id, department, salary){ //Constructor setting up specified properties
        this.name=name;
        this.id=id;
        this.department = department;
        this.salary=salary;
}
 getDetails(){ //Setting up getDetails method
    return 'Employee: ${this.name}, ID: ${this.id}, Department: $this.department}, Salary: $${this.salary}';
 }

 calculateAnnuaSalary(){ //Setting up calculateAnnualSalary 
    return this.salary * 12; //Returning employee's salary 
 }
}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log(emp1.calculateAnnualSalary()); // Expected output: 60000