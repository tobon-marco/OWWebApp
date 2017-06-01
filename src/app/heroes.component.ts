import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';


/** OUR ROOT APP COMPONENT ======================================= */
@Component({
	selector: 'my-heroes',
  	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css'], 
	providers: [HeroService]
})

/** OUR MAIN COMPONENTS STRUCTURE ================================ */
export class HeroesComponent  implements OnInit
{ 
    heroes : Hero[];
    errorMessage: String;
    selectedHero: Hero;
    mode = 'Observable';

	constructor(
		private heroService: HeroService,
		private router: Router
	)
	{}

	getHeroes(): void
	{
        //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        this.heroService.getHeroes()
                            .subscribe(
                                heroes => this.heroes = heroes,
                                error => this.errorMessage = <any> error
                            );
	}
	
	ngOnInit(): void
	{
		this.getHeroes();
	}

	onSelect(hero: Hero): void
	{
		this.selectedHero = hero;
	}

	gotoDetail(): void 
	{
		this.router.navigate(['/detail', this.selectedHero.name]);
	}
	
}
