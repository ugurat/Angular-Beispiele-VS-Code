import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktDetailsComponent } from './produkt-details.component';

describe('ProduktDetailsComponent', () => {
  let component: ProduktDetailsComponent;
  let fixture: ComponentFixture<ProduktDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduktDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduktDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
