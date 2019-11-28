import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadGuitarsComponentComponent } from './read-guitars-component.component';

describe('ReadGuitarsComponentComponent', () => {
  let component: ReadGuitarsComponentComponent;
  let fixture: ComponentFixture<ReadGuitarsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadGuitarsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadGuitarsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
