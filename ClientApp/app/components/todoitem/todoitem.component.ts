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
    public todo: ITodo = { id:0, title:"", TotalItem:0};
    public todoId: number = 0;
    public todoitem: ITodoItem = { item:"", id:0 };
    public todoItems: ITodoItem[] = [];

    constructor(private http: Http, private todoservice: TodoService, private route: ActivatedRoute,private location: Location) {
        const id : any = this.route.snapshot.paramMap.get("id");
        if(id!==null) {
            this.todoId=parseInt(id, undefined);
            this.loadData();
        }
    }
    Additem(): void {
       this.todoservice.Additem(this.todoitem, this.todoId).subscribe(result => {
            this.loadData();
            this.initempty();
       }, error => {
           console.log(error);
       });
    }
    initempty(): void {
        this.todoitem =  {item:"" ,id:0};
    }
    loadData(): void {
       this.todoservice.getTodoById(this.todoId).subscribe(result => {
           this.todo= result.json() as ITodo;
        }, error => {
            console.log(error);
        });
        this.todoservice.getTodoItem(this.todoId).subscribe(result => {
               this.todoItems = result.json() as ITodoItem[];
        },error => {
            console.error(error);
        });
    }

    goback(): void {
        this.location.back();
    }
}

export interface ITodoItem {
    item: string;
    id: number;
}
