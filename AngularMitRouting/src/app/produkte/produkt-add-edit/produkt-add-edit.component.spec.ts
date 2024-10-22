import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktAddEditComponent } from './produkt-add-edit.component';

describe('ProduktAddEditComponent', () => {
  let component: ProduktAddEditComponent;
  let fixture: ComponentFixture<ProduktAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduktAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduktAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
