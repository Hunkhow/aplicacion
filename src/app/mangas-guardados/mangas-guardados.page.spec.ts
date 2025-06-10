import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MangasGuardadosPage } from './mangas-guardados.page';

describe('MangasGuardadosPage', () => {
  let component: MangasGuardadosPage;
  let fixture: ComponentFixture<MangasGuardadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MangasGuardadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
