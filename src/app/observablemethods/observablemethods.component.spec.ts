import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablemethodsComponent } from './observablemethods.component';

describe('ObservablemethodsComponent', () => {
  let component: ObservablemethodsComponent;
  let fixture: ComponentFixture<ObservablemethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablemethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablemethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
