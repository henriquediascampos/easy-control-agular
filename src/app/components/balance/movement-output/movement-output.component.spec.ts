import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementOutputComponent } from './movement-output.component';

describe('MovementOutputComponent', () => {
  let component: MovementOutputComponent;
  let fixture: ComponentFixture<MovementOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
