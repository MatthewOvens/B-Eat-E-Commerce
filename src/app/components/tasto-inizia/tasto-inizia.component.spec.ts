import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastoIniziaComponent } from './tasto-inizia.component';

describe('TastoIniziaComponent', () => {
  let component: TastoIniziaComponent;
  let fixture: ComponentFixture<TastoIniziaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TastoIniziaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TastoIniziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
