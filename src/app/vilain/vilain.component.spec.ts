import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilainComponent } from './vilain.component';

describe('VilainComponent', () => {
  let component: VilainComponent;
  let fixture: ComponentFixture<VilainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
