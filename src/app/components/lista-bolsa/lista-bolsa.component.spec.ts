import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBolsaComponent } from './lista-bolsa.component';

describe('ListaBolsaComponent', () => {
  let component: ListaBolsaComponent;
  let fixture: ComponentFixture<ListaBolsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBolsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
