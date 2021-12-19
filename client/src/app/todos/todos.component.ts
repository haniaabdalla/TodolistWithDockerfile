import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Todo {
  static _id: any;
  static desc: any;
  constructor(public _id: number, public desc: string) {}
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getTodo();
  }

  async getTodo() {
    this.httpClient
      .get<any>('http://localhost:3000/getTodos')
      .subscribe((todos) => {
        this.todos = todos;
      });
  }
  addTodo(todo: HTMLInputElement) {
    if (todo.value.length == 0) {
      alert('please enter a valid input');
      return;
    } else {
      this.httpClient
        .post<any>('http://localhost:3000/addTodo', {
          desc: todo.value,
        })
        .subscribe(() => {});
    }
  }
  // updateTodo(id: Number, newText: HTMLInputElement) {
  //   this.httpClient
  //     .put<any>(`http://localhost:5001/updateTodo/${id}`, {
  //       newText: newText.value,
  //       id: id,
  //     })
  //     .subscribe((todo) => {
  //       this.getTodo();
  //     });
  // }
  // deleteTodo(id: number) {
  //   this.httpClient
  //     .delete<any>(`http://localhost:5001/deleteTodo/${id}`)
  //     .subscribe((todo) => {
  //       this.getTodo();
  //     });
  // }
}
