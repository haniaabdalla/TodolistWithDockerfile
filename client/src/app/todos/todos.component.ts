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
    this.getTodos();
  }

  async getTodos() {
    this.httpClient
      .get<any>('http://backend-toolsss.apps.eu45.prod.nextcle.com')
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
        .post<any>('http://backend-todoapp3.apps.eu45.prod.nextcle.com/Todos', {
          desc: todo.value,
        })
        .subscribe(() => {});
    }
  }
  deleteTodo(id:string) {
    this.httpClient
      .delete<any>(`http://backend-todoapp3.apps.eu45.prod.nextcle.com/deleteTodo/${id}`)
      .subscribe((todo) => {
        this.getTodos();
      })
  }
   updateTodo(id: string, text: HTMLInputElement) {
    this.httpClient
      .put<any>(`http://backend-todoapp3.apps.eu45.prod.nextcle.com/updateTodo/${id}`, {
        id: id,
        text: text.value,
      })
      .subscribe((todo) => {
        this.getTodos();
      });
  }
}
