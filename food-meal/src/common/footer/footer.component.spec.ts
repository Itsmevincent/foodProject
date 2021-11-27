import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                FooterComponent
            ],
        }).compileComponents();
    });

    it('should create the footer component', () => {
        const fixture = TestBed.createComponent(FooterComponent);
        const footer = fixture.debugElement.componentInstance;
        expect(footer).toBeTruthy();
    });

    it(`should have as title '2021 TheMealDB'`, () => {
        const fixture = TestBed.createComponent(FooterComponent);
        const footer = fixture.debugElement.componentInstance;
        expect(footer.footerTitle).toEqual('2021 TheMealDB');
    });

});
