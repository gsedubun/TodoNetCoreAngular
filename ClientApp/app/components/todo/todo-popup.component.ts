import { Http } from "@angular/http/src/http";
import { ITodo } from "./todo.component";
import { Inject } from "@angular/core";
import { Component } from "@angular/core/src/metadata/directives";
import { TodoService } from "../service/Todo.service";
import { ITodoItem } from "../todoitem/todoitem.component";
import { LoggerService } from "../service/logger.service";


@Component({
    selector: "todo-popup",
    templateUrl: "./todo-popup.component.html"
})
export class TodoPopupComponent {
    public todos: ITodo[] = [];
    private  todoitem: ITodoItem = { id:0,item:""};
    private todoid: number =0;

    constructor(private http: Http, private todoservice: TodoService, private loggerservice: LoggerService) {

    }
    submitData(): void {
       this.todoservice.Additem(this.todoitem, this.todoid);
       this.loggerservice.log("add todo item success.");
    }
}
