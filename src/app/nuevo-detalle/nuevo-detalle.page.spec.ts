import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoDetallePage } from './nuevo-detalle.page';

describe('NuevoDetallePage', () => {
  let component: NuevoDetallePage;
  let fixture: ComponentFixture<NuevoDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
