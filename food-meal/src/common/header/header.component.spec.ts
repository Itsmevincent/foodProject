import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                HeaderComponent
            ],
        }).compileComponents();
    });


    it('should create the header component', () => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const header = fixture.debugElement.componentInstance;
        expect(header).toBeTruthy();
    });

    it(`should have as title 'Hi! Welcome'`, () => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const header = fixture.debugElement.componentInstance;
        expect(header.headerTitle).toEqual('Hi! Welcome');
    });

    it('should set image logo path as expected', () => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const header = fixture.debugElement.componentInstance;
        const ele = fixture.debugElement.nativeElement.querySelectorAll('img');
        expect(ele[0]['src']).toContain('https://www.themealdb.com/images/logo-small.png');
    });

});
