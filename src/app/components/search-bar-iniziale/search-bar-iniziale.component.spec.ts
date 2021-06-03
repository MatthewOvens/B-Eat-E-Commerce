import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarInizialeComponent } from './search-bar-iniziale.component';

describe('SearchBarInizialeComponent', () => {
  let component: SearchBarInizialeComponent;
  let fixture: ComponentFixture<SearchBarInizialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarInizialeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarInizialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
