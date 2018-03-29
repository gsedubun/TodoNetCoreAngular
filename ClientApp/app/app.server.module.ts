import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";
import { AppModuleShared } from "./app.shared.module";
import { AppComponent } from "./components/app/app.component";
import { TodoService } from "./components/service/Todo.service";
import { LoggerService } from "./components/service/logger.service";

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        ServerModule,
        AppModuleShared
    ]
})
export class AppModule {
}
