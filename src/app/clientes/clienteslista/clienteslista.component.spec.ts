import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteslistaComponent } from './clienteslista.component';

describe('ClienteslistaComponent', () => {
  let component: ClienteslistaComponent;
  let fixture: ComponentFixture<ClienteslistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteslistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteslistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
