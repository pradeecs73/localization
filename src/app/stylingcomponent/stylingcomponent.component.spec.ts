import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingcomponentComponent } from './stylingcomponent.component';

describe('StylingcomponentComponent', () => {
  let component: StylingcomponentComponent;
  let fixture: ComponentFixture<StylingcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylingcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
