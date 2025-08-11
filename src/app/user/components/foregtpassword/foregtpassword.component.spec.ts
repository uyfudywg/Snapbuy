import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForegtpasswordComponent } from './foregtpassword.component';

describe('ForegtpasswordComponent', () => {
  let component: ForegtpasswordComponent;
  let fixture: ComponentFixture<ForegtpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForegtpasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForegtpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
