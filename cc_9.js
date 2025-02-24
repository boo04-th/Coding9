//Task 1: Creating an Employee Class
class Employee { //Defines an Employee class to store employee details and salary calculations
    constructor(name, id, department, salary){ //Constructor setting up specified properties
        this.name = name; //Stores the employee's full name
        this.id = id; //Stores the Employee ID
        this.department = department; //Stores the department
        this.salary = salary;
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
console.log("Annual salary:", emp1.calculateAnnualSalary()); // Expected output: 60000

//Task 2: Creating a Manager Class (Inheritance & Method Overriding)
class Manager extends Employee { //Defines a Manager class that extends the Employee class and adds management responsibilities
    constructor(name, id, department, salary, teamSize) {
      super(name, id, department, salary);//Calls the Employee constructor to inherit its properties
      this.teamSize = teamSize;//Stores the number of employees managed
    }
  
    getDetails() {//Overrides getDetails() to include the team size 
      return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
  
    calculateBonus() { /Computes and returns the manager's annual bonus
        return this.salary * 12 * 0.10;
    }
    calculateAnnualSalary() { //Computes the total annual salary including the bonus
        return (this.salary * 12) + this.calculateBonus();
    }
  }
//Test cases
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log("Bonus:", mgr1.calculateBonus()); // Expected output: 9600

//Task 3: Creating a Company Class
class Company { //Computes the total annual salary including the bonus
    constructor (name){ //Constructor setting up specified properties
        this.name = name; //Stores the company name
        this.employees = []; //Initializing empty employees array
    }
    addEmployee(employee){ //Setting up addEmployee method
        this.employees.push(employee) //.push() employee to the employees array
    }
    listEmployees(){ //Setting up listEmployees method
        this.employees.forEach(emp =>console.log(emp.getDetails())); //console.log the getDetails method forEach employee
    }
}

//Task 4: Implementing a Payroll System
    calculateTotalPayroll() {  //Calculates and returns the total payroll for all employees in the company
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0);
    }
//Test Cases
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log("Total payroll:", company.calculateTotalPayroll());

 //Task 5 - Implemented Promotion System
 promoteToManager(employee, teamSize) { //Promotes an existing employee to a Manager role with the specified team size
    const index = this.employees.indexOf(employee); //Finding the index of the employee in the employee list
    if (index !== -1) { //Checking if the employee exists in the list before promotion
        //Replace the Employee instance with a Manager instance, keeping the other attributes the same
        this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
    } else {
        console.log("Employee not found in the company.");//Logging to the console if the employee is not found
    }
}
// Test case for Task 5
company.promoteToManager(emp1, 3);
company.listEmployees(); // Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"

