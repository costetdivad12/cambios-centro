import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaBolsaComponent } from './fila-bolsa.component';

describe('FilaBolsaComponent', () => {
  let component: FilaBolsaComponent;
  let fixture: ComponentFixture<FilaBolsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaBolsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaBolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
