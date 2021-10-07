import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccontentComponent } from './dynamiccontent.component';

describe('DynamiccontentComponent', () => {
  let component: DynamiccontentComponent;
  let fixture: ComponentFixture<DynamiccontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiccontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiccontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
