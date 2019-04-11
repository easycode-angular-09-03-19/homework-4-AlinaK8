import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent implements OnInit {
  text = '';

  @Output()  addNewTodo = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(form) {
    this.addNewTodo.emit(this.text);
    form.resetForm();
  }

}
