import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumAchievementsComponent } from './scrum-achievements.component';

describe('ScrumAchievementsComponent', () => {
  let component: ScrumAchievementsComponent;
  let fixture: ComponentFixture<ScrumAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
