import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from  './hero-detail.component';
import { HeroPickerComponent } from  './hero-picker.component';

const routes: Routes = 
[
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:name', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heropicker', component: HeroPickerComponent },
];

@NgModule 
({
    imports: [ RouterModule.forRoot(routes) ] ,
    exports: [ RouterModule ]
})

export class AppRoutingModule {}


