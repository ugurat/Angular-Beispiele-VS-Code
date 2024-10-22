import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeitboxComponent } from './zeitbox.component';

describe('ZeitboxComponent', () => {
  let component: ZeitboxComponent;
  let fixture: ComponentFixture<ZeitboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeitboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeitboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
