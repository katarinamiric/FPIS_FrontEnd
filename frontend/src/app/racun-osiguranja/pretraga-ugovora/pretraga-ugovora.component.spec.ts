import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretragaUgovoraComponent } from './pretraga-ugovora.component';

describe('PretragaUgovoraComponent', () => {
  let component: PretragaUgovoraComponent;
  let fixture: ComponentFixture<PretragaUgovoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretragaUgovoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretragaUgovoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
