import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsTestComponent } from './google-maps-test.component';

describe('GoogleMapsTestComponent', () => {
  let component: GoogleMapsTestComponent;
  let fixture: ComponentFixture<GoogleMapsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleMapsTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleMapsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
