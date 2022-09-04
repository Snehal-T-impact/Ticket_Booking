import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildernComponent } from './view-childern.component';

describe('ViewChildernComponent', () => {
  let component: ViewChildernComponent;
  let fixture: ComponentFixture<ViewChildernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildernComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
