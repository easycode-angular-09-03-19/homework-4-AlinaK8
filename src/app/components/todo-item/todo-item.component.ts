import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnDestroy {

  @Input() todo: TodoItem;
  @Output() completeTask = new EventEmitter();
  @Output() deleteTask = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    alert('The task is about to be destroyed!')
  }

  onCompleteClick() {
      this.completeTask.emit(this.todo.id);
  }

  onDeleteClick() {
    let confirmation = confirm('Are you sure you want to delete the selected task?');

    if (confirmation) {
    this.deleteTask.emit(this.todo.id);
    }
  }

}
