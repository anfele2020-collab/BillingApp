import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaFacturaPage } from './nueva-factura.page';

describe('NuevaFacturaPage', () => {
  let component: NuevaFacturaPage;
  let fixture: ComponentFixture<NuevaFacturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaFacturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
