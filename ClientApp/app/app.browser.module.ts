import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppModuleShared } from "./app.shared.module";
import { AppComponent } from "./components/app/app.component";
import { TodoService } from "./components/service/Todo.service";
import { LoggerService } from "./components/service/logger.service";

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        AppModuleShared
    ],
    providers: [
        { provide: "BASE_URL", useFactory: getBaseUrl },
        TodoService,
        LoggerService
    ]
})
export class AppModule {
}

export function getBaseUrl(): string {
    return document.getElementsByTagName("base")[0].href;
}
