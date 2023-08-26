import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretragaUplatnicaComponent } from './pretraga-uplatnica.component';

describe('PretragaUplatnicaComponent', () => {
  let component: PretragaUplatnicaComponent;
  let fixture: ComponentFixture<PretragaUplatnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretragaUplatnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretragaUplatnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
