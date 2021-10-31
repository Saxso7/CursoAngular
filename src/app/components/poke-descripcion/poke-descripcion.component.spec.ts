import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDescripcionComponent } from './poke-descripcion.component';

describe('PokeDescripcionComponent', () => {
  let component: PokeDescripcionComponent;
  let fixture: ComponentFixture<PokeDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeDescripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
