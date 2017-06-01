import { Component, Input, OnInit}  from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component(
{
    selector:'hero-detail',
    templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css'], 
})

export class HeroDetailComponent implements OnInit
{
    @Input() hero: Hero;
    skins: {}; 
	errorMessage: string;

	//CONSTRUCTOR ========================================================
    constructor (
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
     )
     {}

	//WHEN WE INITIALIZE IT ==================================================
    ngOnInit(): void
    {
		this.route.params
				.switchMap((params: Params) => this.heroService.getHero(params['name']))
                .subscribe(
                    hero => this.hero = hero,
                    error => this.errorMessage = <any> error
                );
		this.route.params
				.switchMap((params: Params) => this.heroService.getHeroSkins(params['name']))
                .subscribe(
                    skins => this.skins = skins,
                    error => this.errorMessage = <any> error
				);
    }

	//ALLOW TO GO BACK ================================================================
    goBack(): void
    {
        this.location.back();
    }
}
