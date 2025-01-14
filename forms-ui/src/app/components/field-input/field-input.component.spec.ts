import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldInputComponent } from './field-input.component';

describe('FieldInputComponent', () => {
  let component: FieldInputComponent;
  let fixture: ComponentFixture<FieldInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
