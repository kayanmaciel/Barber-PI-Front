import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertModalComponent } from './upsert-modal-component';

describe('UpsertModalComponent', () => {
  let component: UpsertModalComponent;
  let fixture: ComponentFixture<UpsertModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpsertModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsertModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
