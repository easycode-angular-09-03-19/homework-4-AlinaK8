import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: TodoItem[] = [
    {id: 1, text: "comprehend Angular", completed: false},
    {id: 2, text: "get the forecast report done by Friday, APr 12th, 2019", completed: false}
  ];

  constructor() {}

  ngOnInit() {
  }
  

  onOutputAddEvent(todotext: string) {
    console.log(todotext);
    this.todos.unshift({
      id: this.todos[0].id +1,
      text: todotext,
      completed: false
    });
  }

  onDeleteEvent(id:number) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === id) {
        this.todos.splice(i , 1);
        return;
      }
    }
  }

  onCompletedEvent(id:number) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id = id) {
        this.todos[i].completed = true; 
      }
    }
  }

  onAllCompleteClick() {
    for (let todo of this.todos) {
      todo.completed = true;
    }
  }

}
