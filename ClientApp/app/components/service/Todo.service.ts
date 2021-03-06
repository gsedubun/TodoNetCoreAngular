import {Http, RequestOptionsArgs, RequestOptions, Headers} from "@angular/http";
import { Component, Injectable, Inject } from "@angular/core";
import { LoggerService } from "./logger.service";
import { ITodo } from "../todo/todo.component";
import { ITodoItem } from "../todoitem/todoitem.component";
import { Subscription } from "rxjs/Subscription";
import { IfObservable } from "rxjs/observable/IfObservable";

@Injectable()
export class TodoService {
    addtodo(arg0: any): ITodo {
        var posted: ITodo =  {id:0, title:"", TotalItem:0};
        this.http.post(this.BASE_URL+"api/todo/Addtodo", JSON.stringify(arg0), this.opt)
        .subscribe(result => {
            posted= result.json() as ITodo;
        }, error => {
            console.log(error);
        });
        return posted;
    }
    private opt: RequestOptions = new RequestOptions({
        headers: new Headers({"content-type":"application/json"})
    });
    constructor(private http: Http, private logger: LoggerService,  @Inject("BASE_URL") private BASE_URL: string) {

    }
    getTodoItem(todoId: number) {
      return   this.http.get(this.BASE_URL + "api/todo/getitem?todoId="+todoId);
    }

    getTodo() {
      return   this.http.get(this.BASE_URL + "api/todo/index");
     
    }
    getTodoById(todoId: number) {
        return this.http.get(this.BASE_URL + "api/todo/get?id="+todoId);
       
    }
    Additem(todoitem: ITodoItem,todoId: number) {
      return  this.http.post(this.BASE_URL + "api/todo/Additem?id="+todoId, JSON.stringify(todoitem), this.opt);
      
    }
}
