import {Component} from '@angular/core'

@Component({
	selector: 'courses',
	template: `
			<h1>Courses for Free !!!</h1
			{{title}}
			`
})

export class CoursesComponent {
	title = "My Courses are free..!!";
}