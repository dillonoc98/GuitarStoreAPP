import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGuitarsComponentComponent } from './list-guitars-component.component';

describe('ListGuitarsComponentComponent', () => {
  let component: ListGuitarsComponentComponent;
  let fixture: ComponentFixture<ListGuitarsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGuitarsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGuitarsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
