import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalenderComponent } from "./calender.component";



const routes: Routes = [
    { path: "", component: CalenderComponent},
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class calenderRoutingModule { }