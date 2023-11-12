import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLaunchComponent } from './card-launch.component';

describe('CardLaunchComponent', () => {
  let component: CardLaunchComponent;
  let fixture: ComponentFixture<CardLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLaunchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
