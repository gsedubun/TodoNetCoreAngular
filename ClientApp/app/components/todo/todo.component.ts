import { Component, Inject } from "@angular/core";
import { Http } from "@angular/http";
import { ITodoItem } from "../todoitem/todoitem.component";
import { TodoService } from "../service/Todo.service";

@Component({
    selector: "todo",
    templateUrl: "./todo.component.html"
})
export class TodoComponent {
    public todos: ITodo[]=[];

    constructor(private http: Http, private Todoservice: TodoService) {
        this.todos = Todoservice.getTodo();
    }

}

export interface ITodo {
    title: string;
    id: number;
    todoItem: ITodoItem[];
}
