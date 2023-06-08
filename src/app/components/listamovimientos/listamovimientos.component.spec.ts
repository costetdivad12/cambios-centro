import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamovimientosComponent } from './listamovimientos.component';

describe('ListamovimientosComponent', () => {
  let component: ListamovimientosComponent;
  let fixture: ComponentFixture<ListamovimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListamovimientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListamovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
