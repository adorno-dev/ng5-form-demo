import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDrivenDebugComponent } from './data-driven-debug.component';

describe('DataDrivenDebugComponent', () => {
  let component: DataDrivenDebugComponent;
  let fixture: ComponentFixture<DataDrivenDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDrivenDebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDrivenDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
