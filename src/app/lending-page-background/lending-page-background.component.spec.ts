import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingPageBackgroundComponent } from './lending-page-background.component';

describe('LendingPageBackgroundComponent', () => {
  let component: LendingPageBackgroundComponent;
  let fixture: ComponentFixture<LendingPageBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingPageBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingPageBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
