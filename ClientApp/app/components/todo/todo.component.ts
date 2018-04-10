import { Component, Inject } from "@angular/core";
import { Http } from "@angular/http";
import { ITodoItem } from "../todoitem/todoitem.component";
import { TodoService } from "../service/Todo.service";

@Component({
    selector: "todo",
    templateUrl: "./todo.component.html"
})
export class TodoComponent {
    public todos: ITodo[] = [];
    public todo: ITodo = {title:"" ,id:0, TotalItem:0 };

    constructor(private Todoservice: TodoService) {
        this.getTodo();
    }
    initempty(): void {
        this.todo =  {title:"" ,id:0, TotalItem:0 };
    }
    getTodo(): void {
        this.Todoservice.getTodo().subscribe(result => { this.todos = result.json() as ITodo[]; }, error => {
            console.log(error);
        });
    }
    newtodo(): void {
        if(this.todo.title !== "") {
            const data: ITodo = this.Todoservice.addtodo(this.todo);
            this.getTodo();
            console.log(data);
            this.initempty();
        }
    }
}

export interface ITodo {
    title: string;
    id: number;
    TotalItem: number;
}
