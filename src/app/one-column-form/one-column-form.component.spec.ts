import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneColumnFormComponent } from './one-column-form.component';

describe('OneColumnFormComponent', () => {
  let component: OneColumnFormComponent;
  let fixture: ComponentFixture<OneColumnFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneColumnFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneColumnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
