import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConfigService } from '../../shared/config.service';
import { Todo } from '../../models/todos/todo';

@Injectable()
export class TodoService {
    
    private headers = new Headers({'Content-Type': 'application/json'});
    private todosUrl: string;

    constructor(private http: Http, private configService: ConfigService) {
        this.todosUrl = configService.get('todosServerBaseUrl') + configService.get('todosServerPath');
    }

    getTodos(): Promise<Todo[]> {
        return this.http.get(this.todosUrl)
            .toPromise()
            .then(response => {
                let todos = response.json() as Todo[];
                for(let todo of todos) {
                    todo.shortenedText = todo.text.length > 55 ? 
                        (todo.text.substring(0, 55) + ' . . .') : todo.text;
                }

                return todos;
            })
            .catch(this.handleError);
    }

     saveTodo(todo: Todo): Promise<Todo> {
        return this.http
            .post(this.todosUrl, JSON.stringify(todo), { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    updateTodo(todo: Todo): Promise<Todo> {
        return this.http
            .put(this.todosUrl, JSON.stringify(todo), { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

     getFinishedTodos() {

     }

     private handleError(error: any): Promise<any> {
        console.error('Todo Service: an error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
     }
}