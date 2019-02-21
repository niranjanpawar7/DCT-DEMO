import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalenderComponent } from "./calender.component";
import { EventDetailComponent } from "../event-detail/event-detail.component";


const routes: Routes = [
    { path: "", component: CalenderComponent},
    { path : "event/:id", component : EventDetailComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class calenderRoutingModule { }