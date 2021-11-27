import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FoodService } from '../food.service';

describe('DashboardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
        
      ],
      declarations: [
        DashboardComponent
      ],
      providers: [FoodService]
    }).compileComponents();
  });


  it('should create the dashboard component', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const dashboard = fixture.debugElement.componentInstance;
    expect(dashboard).toBeTruthy();
  });

  it(`should have as title 'Dashboard'`, () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const dashboard = fixture.debugElement.componentInstance;
    expect(dashboard.title).toEqual('Dashboard');
  });

  it('should be created Service', () => {
    const service: FoodService = TestBed.get(FoodService);
    expect(service).toBeTruthy();
   });

   it('should have getRandomFood function', () => {
    const service: FoodService = TestBed.get(FoodService);
    expect(service.getRandomFood()).toBeTruthy();
   });

   it('should have getFoodByName function', () => {
     let foodName ="ratatouille"
    const service: FoodService = TestBed.get(FoodService);
    expect(service.getFoodByName(foodName)).toBeTruthy();
   });
  
});