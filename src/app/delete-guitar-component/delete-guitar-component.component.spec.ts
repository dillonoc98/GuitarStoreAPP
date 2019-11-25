import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGuitarComponentComponent } from './delete-guitar-component.component';

describe('DeleteGuitarComponentComponent', () => {
  let component: DeleteGuitarComponentComponent;
  let fixture: ComponentFixture<DeleteGuitarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGuitarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGuitarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
