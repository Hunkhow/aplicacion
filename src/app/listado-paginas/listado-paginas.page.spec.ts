import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoPaginasPage } from './listado-paginas.page';

describe('ListadoPaginasPage', () => {
  let component: ListadoPaginasPage;
  let fixture: ComponentFixture<ListadoPaginasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPaginasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
