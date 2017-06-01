import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component 
({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit
{
    heroes: Hero[] = [];
    errorMessage: String;
    mode = 'Observable';

    constructor (private heroService: HeroService)
    {}

    ngOnInit(): void
    {
        this.heroService.getHeroes()
                            .subscribe(
                                heroes => this.heroes = heroes.slice(0,4),
                                error => this.errorMessage = <any> error
							);
        //    .then(heroes => this.heroes = heroes.slice(1,5));
    }
}
