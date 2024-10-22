import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterboxComponent } from './counterbox.component';

describe('CounterboxComponent', () => {
  let component: CounterboxComponent;
  let fixture: ComponentFixture<CounterboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
