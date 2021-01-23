import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousCheckedComponent } from './previous-checked.component';

describe('PreviousCheckedComponent', () => {
  let component: PreviousCheckedComponent;
  let fixture: ComponentFixture<PreviousCheckedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousCheckedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
