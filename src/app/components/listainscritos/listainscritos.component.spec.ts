import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListainscritosComponent } from './listainscritos.component';

describe('ListainscritosComponent', () => {
  let component: ListainscritosComponent;
  let fixture: ComponentFixture<ListainscritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListainscritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListainscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
