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

//Task 3: Creating a Company Class
class Company {
    constructor (name){ //Constructor setting up specified properties
        this.name = name;
        this.employees = []; //Initializing empty employees array
    }
    addEmployee(employee){ //Setting up addEmployee method
        this.employees.push(employee) //.push() employee to the employees array
    }
    listEmployees(){ //Setting up listEmployees method
        this.employees.forEach(emp =>console.log(emp.getDetails())); //console.log the getDetails method forEach employee
    }
}

//Test Cases
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

//Task 4: Implementing a Payroll System
class CompanyWithPayroll extends Company {
    calculateTotalPayroll() {
        return this.employees.reduce((total,emp)=>{
            let salary = emp.calculateAnnualSalary();
            if (emp instanceof Manager){
                salary += emp.calculateBonus(); // Add bonus for managers
            }
            return total + salary;
        }, 0);
    }
}

Object. setPrototypeOf(company, CompanyWithPayroll.prototype);//Extending company to include payroll functionality
console.log(company.calculateTotalPayroll());  // Expected output: 165600 (assuming emp1 and mgr1 salaries)
