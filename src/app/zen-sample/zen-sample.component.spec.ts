import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenSampleComponent } from './zen-sample.component';

describe('ZenSampleComponent', () => {
  let component: ZenSampleComponent;
  let fixture: ComponentFixture<ZenSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZenSampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
