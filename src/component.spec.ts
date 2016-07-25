import {
    tick,
    ComponentFixture,
    TestComponentBuilder,
    inject,
    addProviders,
    fakeAsync
} from '@angular/core/testing';

import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

// Load the implementations that should be tested
import {MyComponent} from './component';

describe('MyComponent', () => {
    let builder: TestComponentBuilder;

    beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => builder = tcb));

    describe('when the controller is instantiated', () => {
        it('has its properties defined', () => {
            builder.createAsync(TestApp).then((fixture: ComponentFixture<TestApp>) => {
                const component = fixture.debugElement.query(By.directive(MyComponent)).componentInstance;
                expect(component.helloWorld).toBeDefined();
            });
        });
    });
});

@Component({
    selector: 'test-app',
    template: `<my-component></my-component>`,
    directives: [MyComponent]
})
class TestApp {
    ngOnInit() {

    }
}
