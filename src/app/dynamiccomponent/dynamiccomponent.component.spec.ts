import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccomponentComponent } from './dynamiccomponent.component';

describe('DynamiccomponentComponent', () => {
  let component: DynamiccomponentComponent;
  let fixture: ComponentFixture<DynamiccomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiccomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiccomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
