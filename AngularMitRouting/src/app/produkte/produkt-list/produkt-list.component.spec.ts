import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktListComponent } from './produkt-list.component';

describe('ProduktListComponent', () => {
  let component: ProduktListComponent;
  let fixture: ComponentFixture<ProduktListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduktListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduktListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
