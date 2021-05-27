import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRistoranteComponent } from './pagina-ristorante.component';

describe('PaginaRistoranteComponent', () => {
  let component: PaginaRistoranteComponent;
  let fixture: ComponentFixture<PaginaRistoranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaRistoranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRistoranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
