import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { LandingComponent } from './landing/landing.component';
import { PortoComponent } from './porto/porto.component';

const routes: Routes = [
{path:"portfoilo",component:PortoComponent},
{path:"about",component:AboutComponent},
{path:"contact",component:ContactMeComponent},
{path:"", redirectTo: "landing" , pathMatch: "prefix"},
{path:"landing",component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
