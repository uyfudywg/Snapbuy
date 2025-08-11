import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavberLoginComponent } from './navber-login.component';

describe('NavberLoginComponent', () => {
  let component: NavberLoginComponent;
  let fixture: ComponentFixture<NavberLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavberLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavberLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
