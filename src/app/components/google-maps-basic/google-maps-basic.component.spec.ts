import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsBasicComponent } from './google-maps-basic.component';

describe('GoogleMapsBasicComponent', () => {
  let component: GoogleMapsBasicComponent;
  let fixture: ComponentFixture<GoogleMapsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleMapsBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleMapsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
