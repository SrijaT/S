import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-app',
  templateUrl: './crud-app.component.html',
  styleUrls: ['./crud-app.component.css']
})
export class CrudAppComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  employee = 
    [
      {
        empId : 1001 ,
        empName:"Rahul",
        empSal:9000,
        empDep:"Java"
      },
      {
        empId:1002,
        empName:"Sachin",
        empSal:19000,
        empDep:"OraApps"
      },
      {
        empId:1003,
        empName:"Vikash",
        empSal:29000,
        empDep:"BI"
      },
      ];

}
