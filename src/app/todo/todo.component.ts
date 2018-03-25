import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  name: string;
  age: number;
  userForm = new FormGroup({
    name: new FormControl('Ram'),
    age: new FormControl('20')
  });
  constructor() { }

  ngOnInit() {
  }
  onFormSubmit(): void {
    console.log('Name:' + this.userForm.get('name').value);
    this.name = this.userForm.get('name').value;
    console.log(" name ------------------- " + this.name);
  }

}
