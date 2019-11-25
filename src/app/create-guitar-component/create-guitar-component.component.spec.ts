import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuitarComponentComponent } from './create-guitar-component.component';

describe('CreateGuitarComponentComponent', () => {
  let component: CreateGuitarComponentComponent;
  let fixture: ComponentFixture<CreateGuitarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGuitarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGuitarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
