import {
    Component,
    OnInit
} from '@angular/core';

const styles = [require('./style.scss').toString()],
    template = require('./template.html');

import {MyComponentInterface} from './component.d';

/**
 * A component for entering a list of terms to be used with ngModel.
 */
@Component({
    moduleId: module.id,
    selector: 'my-component',
    directives: [],
    styles,
    template
})
export class MyComponent implements MyComponentInterface, OnInit {

    public helloWorld(): string {
        return 'Hello World';
    }

    ngOnInit() {

    }
}
