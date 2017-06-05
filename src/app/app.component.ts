import { Component } from '@angular/core';

@Component 
({
	selector: 'my-app',
  	template: 
            `
				<div class="jumbotron">
			  		<h1>{{title}}!</h1>
                	<nav>
                    	<a routerLink="/dashboard" routerLinkActive="active"> Dashboard </a>
                    	<a routerLink="/heroes" routerLinkActive="active"> Heroes </a>
                    	<a routerLink="/heropicker" routerLinkActive="active"> Overview </a>
                	</nav>
				</div>
                <router-outlet> </router-outlet>
            `,
    styleUrls: ['./app.component.css']
})

export class AppComponent
{
    title = 'Overwatch Heroes';
}
