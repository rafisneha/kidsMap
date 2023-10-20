import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VowelsComponent } from './vowels.component';

describe('VowelsComponent', () => {
  let component: VowelsComponent;
  let fixture: ComponentFixture<VowelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VowelsComponent]
    });
    fixture = TestBed.createComponent(VowelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
