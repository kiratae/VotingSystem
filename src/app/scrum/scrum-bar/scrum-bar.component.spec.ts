import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumBarComponent } from './scrum-bar.component';

describe('ScrumBarComponent', () => {
  let component: ScrumBarComponent;
  let fixture: ComponentFixture<ScrumBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
