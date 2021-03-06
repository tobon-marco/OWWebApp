import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroPickerComponent } from './hero-picker.component';
import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports:      
        [ 
            BrowserModule,
            FormsModule, /** IMPORT FORMSMODULE BEFORE BINDING WITH [(ngModel)] */
            AppRoutingModule,
            HttpModule,
            JsonpModule
        ],
    declarations: 
        [ 
            AppComponent,
			HeroDetailComponent,
			HeroesComponent,
            DashboardComponent,
            HeroPickerComponent
        ],
	providers:
		[
			HeroService
		],
    bootstrap:    
        [ 
            AppComponent 
        ]
})
export class AppModule { }
