/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResidentLoginListarComponent } from './residentLogin-listar.component';

describe('ResidentLoginListarComponent', () => {
  let component: ResidentLoginListarComponent;
  let fixture: ComponentFixture<ResidentLoginListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentLoginListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentLoginListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
