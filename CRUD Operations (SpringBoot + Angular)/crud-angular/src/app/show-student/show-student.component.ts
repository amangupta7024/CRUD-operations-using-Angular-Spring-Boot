import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { resolve } from 'node:path';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrl: './show-student.component.css'
})
export class ShowStudentComponent implements OnInit  {

  constructor(private httpClient: HttpClient) {}

  students: any[] = [];

  ngOnInit(): void {
    this.getAllStudentData();
  }

  getAllStudentData() {
    const baseURL = "http://localhost:8082/getStudents";
    this.httpClient.get(baseURL).subscribe((response:any)=>{
      console.log(response);
      this.students = response;
    }, error => {
      console.log("some error is comming" + error);
    })

  }

  deleteStudent(studentId:any) {
    const baseURL = "http://localhost:8082/deleteStudent";
    this.httpClient.get(baseURL + "/" + studentId).subscribe((response:any)=>{
      console.log(response);
      this.getAllStudentData();
    }, error => {
      console.log("some error is comming" + error);
    })
  }
 
 
}
