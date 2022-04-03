import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSuperpowerComponent } from './hero-superpower.component';

describe('HeroSuperpowerComponent', () => {
  let component: HeroSuperpowerComponent;
  let fixture: ComponentFixture<HeroSuperpowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSuperpowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSuperpowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
