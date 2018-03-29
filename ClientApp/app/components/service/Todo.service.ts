import {Http} from "@angular/http";
import { Component, Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";
import { ITodo } from "../todo/todo.component";
import { ITodoItem } from "../todoitem/todoitem.component";

@Injectable()
export class TodoService {
    private  BASE_URL: String = "http://localhost:5000/";

    constructor(private http: Http, private logger: LoggerService) {

    }

    getTodo(): any {
        this.http.get(this.BASE_URL + "api/todo/index").subscribe(result => {
            return result.json() as ITodo[];
        }, error => console.error(error));
    }
    getTodoById(todoId: number): any {
        this.http.get(this.BASE_URL + "api/todo/get?id="+todoId).subscribe(result => {
            return result.json() as ITodo;
        }, error => console.error(error));
    }
    Additem(todoitem: ITodoItem,todoId: number): ITodo {
        var data: ITodo = { id:0, title:"", todoItem:[] };
        this.http.post(this.BASE_URL + "api/todo/Additem?id="+todoId, JSON.stringify(todoitem)).subscribe(result => {
            data= result.json() as ITodo;
        }, error => console.error(error));
        return data;
    }
}

export class TodoItemService {
    private  BASE_URL: String = "http://localhost:5000/";

    constructor(private http: Http, private logger: LoggerService) {

    }
}