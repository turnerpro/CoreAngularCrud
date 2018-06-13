import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/catch';
import { EmployeeService } from './../services/employeeService.service';
import { Observable } from "rxjs/Observable";
import { Employee } from './../services/employeeService.service';

//Here we specified the provider as EmployeeService and html path which we will add later

@Component({
  selector: 'employee',
  providers: [EmployeeService],
  templateUrl: './employee.component.html'
})

//After that add below code which will be used to get the data from the service
export class EmployeeComponent implements OnInit {
  public employeeList: Observable<Employee[]>;
  showEditor = true;
  myName: string;
  employee: Employee;
  constructor(private dataService: EmployeeService) {
    this.employee = new Employee();
  }
  ngOnInit() {
    // if you want to debug info just uncomment the console.log lines.
    // console.log("You are in ngOnInit");
    this.employeeList = this.dataService.employeeList;
    this.dataService.getAll();
  }

  public addEmployee(item: Employee) {
    let employeeId = this.dataService.addEmployee(this.employee);
  }
  public updateEmployee(item: Employee) {
    this.dataService.updateEmployee(item);
  }
  public deleteEmployee(employeeId: number) {
    this.dataService.removeItem(employeeId);
  }
}
