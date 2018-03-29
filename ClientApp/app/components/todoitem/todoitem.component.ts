import { Component, Inject } from "@angular/core";
import { Http } from "@angular/http";
import { ITodo } from "../todo/todo.component";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { TodoService } from "../service/Todo.service";

@Component({
    selector: "todoitem",
    templateUrl: "./todoitem.component.html"
})
export class TodoitemComponent {
    private todo: ITodo = { id:0, title:"", todoItem:[]};
    private todoId: number = 0;
    private todoitem: ITodoItem = { item:"", id:0 };
    private todoItems: ITodoItem[] = [];

    constructor(private http: Http, private todoservice: TodoService, private route: ActivatedRoute,private location: Location) {
        const id : any = this.route.snapshot.paramMap.get("id");
        if(id!==null) {
            this.todoId=parseInt(id,3);
        }
       this.loadData();
    }

    loadData(): void {
       this.todo= this.todoservice.getTodoById(this.todoId);
        this.todoItems = this.todo.todoItem;
    }

    goback(): void {
        this.location.back();
    }
}

export interface ITodoItem {
    item: string;
    id: number;
}
