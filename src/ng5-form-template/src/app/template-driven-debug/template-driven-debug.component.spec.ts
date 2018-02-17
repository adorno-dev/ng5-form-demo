import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenDebugComponent } from './template-driven-debug.component';

describe('TemplateDrivenDebugComponent', () => {
  let component: TemplateDrivenDebugComponent;
  let fixture: ComponentFixture<TemplateDrivenDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenDebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
