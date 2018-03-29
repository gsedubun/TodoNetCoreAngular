import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import {Location } from "@angular/common";
import { AppComponent } from "./components/app/app.component";
import { NavMenuComponent } from "./components/navmenu/navmenu.component";
import { HomeComponent } from "./components/home/home.component";
import { FetchDataComponent } from "./components/fetchdata/fetchdata.component";
import { CounterComponent } from "./components/counter/counter.component";
import { TodoComponent } from "./components/todo/todo.component";
import { TodoitemComponent } from "./components/todoitem/todoitem.component";
import { TodoService } from "./components/service/Todo.service";
import { LoggerService } from "./components/service/logger.service";

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        TodoComponent,
        TodoitemComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", component: HomeComponent },
            { path: "counter", component: CounterComponent },
            { path: "fetch-data", component: FetchDataComponent },
            { path: "todo", component: TodoComponent },
            { path: "todo/:id", component: TodoitemComponent },
            { path: "**", redirectTo: "home" }
        ])
    ],
    providers: [
        LoggerService,
        TodoService
    ]
})
export class AppModuleShared {
}
