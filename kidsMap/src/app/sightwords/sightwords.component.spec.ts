import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightwordsComponent } from './sightwords.component';

describe('SightwordsComponent', () => {
  let component: SightwordsComponent;
  let fixture: ComponentFixture<SightwordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SightwordsComponent]
    });
    fixture = TestBed.createComponent(SightwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
