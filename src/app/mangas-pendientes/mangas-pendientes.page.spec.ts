import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MangasPendientesPage } from './mangas-pendientes.page';

describe('MangasPendientesPage', () => {
  let component: MangasPendientesPage;
  let fixture: ComponentFixture<MangasPendientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MangasPendientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
