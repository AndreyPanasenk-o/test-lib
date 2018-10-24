import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NecCoreLibComponent } from './nec-core-lib.component';

describe('NecCoreLibComponent', () => {
  let component: NecCoreLibComponent;
  let fixture: ComponentFixture<NecCoreLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NecCoreLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NecCoreLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
