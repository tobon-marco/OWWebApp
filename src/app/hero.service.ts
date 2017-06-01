import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

//Get heroes from mock hereos
//NO LONGER USED
//import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService
{
    //URL FOR HEROES RESOURCE
    private heroUrl = 'http://localhost:8085/MyApp/webresources/heroes';

	//CONSTRUCTOR ================================================================
    constructor ( private http: Http)
    {}

    //CALLS SERVER FOR ALL HEROES ================================================
    getHeroes(): Observable<Hero[]>
    {
        return this.http.get(this.heroUrl)
                        .map(this.extractData)
                        .catch(this.handleError)
                  		;
    }
    
    //RETURNS OUR DATA ============================================================
    private extractData (res: Response)
    {
        let body = res.json();
		
		console.log(body);
		return body.hero || {};
    }
    
    //ERROR HANDLER  =============================================================
  	private handleError (error: Response | any) 
	{
    	// In a real world app, you might use a remote logging infrastructure
    	let errMsg: string;
    	if (error instanceof Response) 
		{
      		const body = error.json() || '';
      		const err = body.error || JSON.stringify(body);
      		errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    	} 
		else 
		{
      		errMsg = error.message ? error.message : error.toString();
    	}
    	console.error(errMsg);
    	return Observable.throw(errMsg);
	}	


	//GET HERO BY NAME ==========================================================
    getHero(name: string): Observable<Hero>
    {
		console.log(this.heroUrl+"/"+name);
		return this.http.get(this.heroUrl+"/"+name)
						.map(res => res.json())
						.catch(this.handleError)
						;

        //return this.getHeroes()
        //	.then(heroes => heroes.find(hero => hero.id === id));
    }

    //GET SKINS FOR A HERO ========================================================
    getHeroSkins(name: string): Observable<Hero>
    {
        console.log(this.heroUrl+"/"+name+"/skins");
        return this.http.get(this.heroUrl+"/"+name+"/skins")
						.map(this.extractSkins)
						.catch(this.handleError)
						;
    }
    //RETURNS OUR SKINS DATA ============================================================
    private extractSkins (res: Response)
    {
        let body = res.json();

        console.log("=============");
		console.log(body.skins);
		return body.skins || {};
    }
}
