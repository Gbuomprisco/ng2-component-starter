import { Component } from '@angular/core';
import { MyComponent } from '../../src/component';

@Component({
    selector: 'app',
    directives: [MyComponent],
    template: require('./home.html')
})

export class App {
    constructor() {

    }

    ngOnInit() {

    }
}
