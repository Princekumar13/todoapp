import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  public todolist = [];
  public isCompleted = false;
  public isPending = false;
  public todoComplete=[];

  todoList(listTitle:NgForm) {
    this.todolist.push({
      title:listTitle.value.todo,
      complete:false
    });
    listTitle.reset();
  }

  removeTodo(index) {
    this.todolist.splice(index,1);
  }

  toggleTodoComplete(completed) {
    console.log(completed);
  }

  deleteCompleted() {
    for(var i=(this.todolist.length -1); i > -1; i--){
      if(this.todolist[i].complete) {
        this.todolist.splice(i,1);
      }
    }
  }

  showCompleted() {
    this.todolist.forEach(todo => {
      if(todo.complete) {
        this.isCompleted = true;
        this.isPending = false;
      }
    })
  }

  showPending() {
    this.todolist.forEach(todo => {
      if(!todo.complete) {
        this.isPending = true;
        this.isCompleted = false;
      }
    })
  }

  showAll() {
    this.isPending = false;
    this.isCompleted = false;
  }
}
