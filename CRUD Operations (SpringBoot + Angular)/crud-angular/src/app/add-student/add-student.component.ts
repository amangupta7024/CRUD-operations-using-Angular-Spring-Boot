import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  constructor(private httpClient:HttpClient){}

  student = new FormGroup({
    name: new FormControl(),
    id: new FormControl(),
    age: new FormControl(),
    dept: new FormControl()
  });

  handleSubmit() {
    const url = "http://localhost:8082/addStudent"
    console.log(this.student.value);
    this.httpClient.post(url,this.student.value).subscribe((response)=>{
      console.log(response);
    },error=> {
      console.log("error for adding student" + error);
    })
  }

}
