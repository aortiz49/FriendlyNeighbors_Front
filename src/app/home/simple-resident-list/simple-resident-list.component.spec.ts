import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleResidentListComponent } from './simple-resident-list.component';

describe('SimpleResidentListComponent', () => {
  let component: SimpleResidentListComponent;
  let fixture: ComponentFixture<SimpleResidentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleResidentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleResidentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
