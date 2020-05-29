import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAppRoutingComponent } from './start-app-routing.component';

describe('StartAppRoutingComponent', () => {
  let component: StartAppRoutingComponent;
  let fixture: ComponentFixture<StartAppRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartAppRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAppRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
