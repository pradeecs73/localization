import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxexampleComponent } from './ngrxexample.component';

describe('NgrxexampleComponent', () => {
  let component: NgrxexampleComponent;
  let fixture: ComponentFixture<NgrxexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
